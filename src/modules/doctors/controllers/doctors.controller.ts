import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { search } from 'src/shared/container/providers/PostOfficeZip';
import { AppError } from 'src/shared/erros/AppError';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';

import { CreateDoctorDto } from '../dto/create-doctor.dto';
import { UpdateDoctorDto } from '../dto/update-doctor.dto';
import { DoctorsService } from '../services/doctors.service';
import { DoctorsSpecialtiesService } from '../services/doctors_specialties.service';
import { Doctor } from '../entities/doctor.entity';

@ApiTags('Doctors')
@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  @ApiOkResponse({ type: [Doctor] })
  create(@Body() createDoctorDto: CreateDoctorDto) {
    const isExistCep = search(createDoctorDto.cep);

    if (!isExistCep) {
      throw new AppError('zip does not exist', 400);
    }

    return this.doctorsService.create(createDoctorDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: Doctor })
  findOne(@Param('id') id: string) {
    return this.doctorsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorsService.update(id, updateDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorsService.remove(id);
  }
}
