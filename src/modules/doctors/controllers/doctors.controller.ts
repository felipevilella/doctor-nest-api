import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode,
} from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiResponse } from '@nestjs/swagger';

import { Doctor } from '../entities/doctor.entity';
import { search } from '../../../shared/container/providers/PostOfficeZip';
import { CreateDoctorDto } from '../dto/create-doctor.dto';
import { UpdateDoctorDto } from '../dto/update-doctor.dto';
import { AppError } from '../../../shared/erros/AppError';
import { DoctorsService } from '../services/doctors.service';
import { ListDoctorDto } from '../dto/list-doctor.dto';
import { CreateDoctorSwagger } from '../swagger/create-doctor.swagger';
import { SearchDoctorSwagger } from '../swagger/search-doctor.swagger';
import { BadRequestSwagger } from '../swagger/helpes/bad-request.swagger';
import { UpdateDoctorSwagger } from '../swagger/update-doctor.swagger';
import { response } from 'express';
import { findRedis, saveRedis } from '../helpers/redis';

@ApiTags('Doctors')
@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  @HttpCode(201)
  @ApiResponse({
    status: 201,
    description: 'Created doctor',
    type: CreateDoctorSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'invalid parameter',
    type: BadRequestSwagger,
  })
  async create(@Body() createDoctorDto: CreateDoctorDto) {
    if (createDoctorDto.specialtys.length < 2) {
      throw new AppError('The doctor must have at least two specialties', 400);
    }

    const address = await search(createDoctorDto.cep);
    createDoctorDto.address = address;

    const doctor = this.doctorsService.create(createDoctorDto);
    return doctor;
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Search doctor',
    type: SearchDoctorSwagger,
  })
  @ApiOkResponse({ type: [Doctor] })
  async find(@Query() listDoctorDto: ListDoctorDto) {
    const list = await findRedis(listDoctorDto);

    if (!list) {
      const list = await this.doctorsService.find(listDoctorDto);
      await saveRedis(list, listDoctorDto);

      return list;
    }

    console.log('oii');
    return list;
  }

  @Patch(':id')
  @HttpCode(202)
  @ApiResponse({
    status: 202,
    description: 'Updated doctor',
    type: UpdateDoctorSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'invalid parameter',
    type: BadRequestSwagger,
  })
  async update(
    @Param('id') id: string,
    @Body() updateDoctorDto: UpdateDoctorDto,
  ) {
    if (updateDoctorDto.specialtys.length < 2) {
      throw new AppError('The doctor must have at least two specialties', 400);
    }

    const address = await search(updateDoctorDto.cep);
    updateDoctorDto.address = address;

    const doctor = this.doctorsService.update(id, updateDoctorDto);

    return doctor;
  }

  @Delete(':id')
  @HttpCode(202)
  @ApiResponse({
    status: 200,
    description: 'deleted doctor',
  })
  async remove(@Param('id') id: string) {
    await this.doctorsService.remove(id);

    return response.status(202).send();
  }
}
