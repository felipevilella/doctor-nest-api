import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';

import { Doctor } from '../entities/doctor.entity';
import { search } from '../../../shared/container/providers/PostOfficeZip';
import { CreateDoctorDto } from '../dto/create-doctor.dto';
import { UpdateDoctorDto } from '../dto/update-doctor.dto';
import { AppError } from '../../../shared/erros/AppError';
import { DoctorsService } from '../services/doctors.service';

@ApiTags('Doctors')
@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  @ApiOkResponse({ type: [Doctor] })
  async create(@Body() createDoctorDto: CreateDoctorDto) {
    if (createDoctorDto.specialtys.length < 2) {
      throw new AppError('The doctor must have at least two specialties', 400);
    }

    const address = await search(createDoctorDto.cep);
    createDoctorDto.address = address;

    const doctor = this.doctorsService.create(createDoctorDto);
    return doctor;
  }

  // @Get()
  // @ApiOkResponse({ type: [Doctor] })
  // async find(@Query() listDoctorDto: ListDoctorDto) {
  //   console.log(listDoctorDto);
  //   const list = await this.doctorsService.find(listDoctorDto);

  //   return list;
  // }

  @Get()
  @ApiOkResponse({ type: Doctor })
  findOne(@Query('id') id: string) {
    return this.doctorsService.find(id);
  }

  @Patch(':id')
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
  remove(@Param('id') id: string) {
    return this.doctorsService.remove(id);
  }
}
