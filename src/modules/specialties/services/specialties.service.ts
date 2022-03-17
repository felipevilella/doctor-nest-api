import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Specialty } from '../entities/specialty.entity';

@Injectable()
export class SpecialtiesService {
  constructor(
    @InjectRepository(Specialty)
    private readonly doctorRepository: Repository<Specialty>,
  ) {}

  async findAll(): Promise<Specialty[]> {
    const typeSpecialties = await this.doctorRepository.find();

    return typeSpecialties;
  }
}
