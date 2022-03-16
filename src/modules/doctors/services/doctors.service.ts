import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { CreateDoctorDto } from '../dto/create-doctor.dto';
import { UpdateDoctorDto } from '../dto/update-doctor.dto';
import { Doctor } from '../entities/doctor.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
  ) {}

  async create({
    cell_phone,
    cep,
    crm,
    landline,
    name,
  }: CreateDoctorDto): Promise<Doctor> {
    const doctor = this.doctorRepository.create({
      cell_phone,
      cep,
      crm,
      landline,
      name,
    });

    await this.doctorRepository.save(doctor);

    return doctor;
  }

  async findOne(id: string): Promise<Doctor> {
    const doctor = await getConnection()
      .getRepository(Doctor)
      .createQueryBuilder('doctors')
      .where('doctors.id = :id', { id })
      .getOne();

    return doctor;
  }

  async update(
    id: string,
    { cell_phone, cep, crm, landline, name }: UpdateDoctorDto,
  ): Promise<void> {
    this.doctorRepository.update(id, {
      cell_phone,
      cep,
      crm,
      landline,
      name,
    });
  }

  async remove(id: string): Promise<void> {
    this.doctorRepository.update(id, { is_delete: true });
  }
}
