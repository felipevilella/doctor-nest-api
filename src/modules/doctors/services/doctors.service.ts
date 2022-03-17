import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, getRepository, Repository } from 'typeorm';
import { uuid } from 'uuidv4';
import { CreateDoctorDto } from '../dto/create-doctor.dto';
import { ListDoctorDto } from '../dto/list-doctor.dto';
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
    specialtys,
  }: CreateDoctorDto): Promise<Doctor> {
    const doctor = this.doctorRepository.create({
      id: uuid(),
      cell_phone,
      cep,
      crm,
      landline,
      name,
      address,
      specialtys,
    });

    await this.doctorRepository.save(doctor);

    return doctor;
  }

  async find({
    address,
    cell_phone,
    cep,
    crm,
    id,
    landline,
    name,
    specialties,
  }: ListDoctorDto): Promise<Doctor[]> {
    const doctor = getConnection()
      .getRepository(Doctor)
      .createQueryBuilder('doctors')
      .innerJoinAndSelect('doctors.specialtys', 'specialties')
      .where('doctors.is_delete = :delete', { delete: false });

    if (address) {
      doctor.andWhere(`doctors.address ILIKE :address`, {
        address: `%${address}%`,
      });
    }

    if (cell_phone) {
      doctor.andWhere('doctors.cell_phone =:cell_phone', { cell_phone });
    }

    if (cep) {
      doctor.andWhere('doctors.cep =:cep', { cep });
    }

    if (crm) {
      doctor.andWhere('doctors.crm =:crm', { crm });
    }

    if (id) {
      doctor.andWhere('doctors.id =:id', { id });
    }

    if (landline) {
      doctor.andWhere('doctors.landline =:landline', { landline });
    }

    if (name) {
      doctor.andWhere(`doctors.name ILIKE :name`, {
        name: `%${name}%`,
      });
    }

    if (specialties) {
      doctor.andWhere('specialties.id =:specialties', { specialties });
    }

    const result = await doctor.getMany();

    return result;
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

    return this.findbyId(id);
  }

  async remove(id: string): Promise<void> {
    await this.doctorRepository.update(id, { is_delete: true });
  }

  async findbyId(id: string): Promise<Doctor> {
    const doctor = await getConnection()
      .getRepository(Doctor)
      .createQueryBuilder('doctors')
      .innerJoinAndSelect('doctors.specialtys', 'specialties')
      .where('doctors.id = :id', { id })
      .getOne();

    return doctor;
  }
}
