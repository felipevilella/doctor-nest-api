import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDoctorsSpecialtyDto } from '../dto/create-doctors_specialty.dto';
import { DoctorsSpecialty } from '../entities/doctors_specialty.entity';

@Injectable()
export class DoctorsSpecialtiesService {
  constructor(
    @InjectRepository(DoctorsSpecialty)
    private readonly doctorEspecialtyRepository: Repository<DoctorsSpecialty>,
  ) {}

  async create(createDoctorsSpecialtyDto: CreateDoctorsSpecialtyDto) {
    const doctorsSpecialty = this.doctorEspecialtyRepository.create(
      createDoctorsSpecialtyDto,
    );

    await this.doctorEspecialtyRepository.save(doctorsSpecialty);

    return doctorsSpecialty;
  }

  async remove(user_id: number) {
    await this.doctorEspecialtyRepository.delete(user_id);
  }
}
