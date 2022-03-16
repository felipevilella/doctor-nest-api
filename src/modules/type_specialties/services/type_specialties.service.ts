import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeSpecialty } from '../entities/type_specialty.entity';

@Injectable()
export class TypeSpecialtiesService {
  constructor(
    @InjectRepository(TypeSpecialty)
    private readonly doctorRepository: Repository<TypeSpecialty>,
  ) {}

  async findAll(): Promise<TypeSpecialty[]> {
    const typeSpecialties = await this.doctorRepository.find();

    return typeSpecialties;
  }
}
