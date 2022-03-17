import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { uuid } from 'uuidv4';
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
    address,
  }: CreateDoctorDto): Promise<Doctor> {
    const doctor = this.doctorRepository.create({
      id: uuid(),
      cell_phone,
      cep,
      crm,
      landline,
      name,
      address,
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
  ): Promise<Doctor> {
    this.doctorRepository.update(id, {
      cell_phone,
      cep,
      crm,
      landline,
      name,
    });

    return this.doctorRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.doctorRepository.update(id, { is_delete: true });
  }
}
