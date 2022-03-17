import { Test, TestingModule } from '@nestjs/testing';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from '../services/doctors.service';
import { CreateDoctorDto } from '../dto/create-doctor.dto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from '../entities/doctor.entity';
import { AppError } from '../../../shared/erros/AppError';
import { request } from 'http';
import { INestApplication } from '@nestjs/common';

describe('DoctorsController', () => {
  let app: INestApplication;
  let doctorController: DoctorsController;
  let doctorsService: DoctorsService;
  
  const doctorResult: Doctor = 
    new Doctor({
      id: '0a10d29e-3044-4c4e-ad37-821407802b85',
      name: "Julia Caren",
      crm: "1CS4567",
      landline: 31945985898,
      cell_phone: 31945985892,
      cep: 32310330,
      address: 'Rua Gabirobas - Eldorado, Contagem - MG',
      is_delete: false,
    })

  const doctorResultUpdate: Doctor =  new Doctor({
    id: '0a10d29e-3044-4c4e-ad37-821407802b85',
    name: "Julia Alves",
    crm: "1CS4567",
    landline: 31945985898,
    cell_phone: 31945985892,
    cep: 32310330,
    address: 'Rua Gabirobas - Eldorado, Contagem - MG',
    is_delete: false,
  })

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorsController],
      providers: [
        {
          provide: DoctorsService,
          useValue: {
            create: jest.fn().mockResolvedValue(doctorResult),
            find: jest.fn,
            update: jest.fn().mockResolvedValue(doctorResultUpdate),
            remove: jest.fn
          }
        }
      ],
    }).compile();

    doctorController = module.get<DoctorsController>(DoctorsController);
  });

  it('should be defined', () => {
    expect(doctorController).toBeDefined();
  });

  it('should able to create doctor', async() => {
    const doctor: CreateDoctorDto = {
      name: "Julia Caren",
      crm: "1CS4567",
      landline: 31945985898,
      cell_phone: 31945985892,
      cep: 32310330,
      specialtys: [
        {
          "id": "c1e1a7de-b446-45d2-bb5b-3d067a7705e2"
        },
        {
          "id": "c1e1a7de-b446-45d2-bb5b-3d067a7705e3"
        }
      ]
    };

    const result = await doctorController.create(doctor);
    expect(result).toEqual(doctorResult)
  })

  it('should not able  to create doctor with incorrect cep ', async() => {
    expect(async () => {
      const doctor: CreateDoctorDto = {
        name: "Julia Caren",
        crm: "1CS4567",
        landline: 31945985898,
        cell_phone: 31945985892,
        cep: 12345684,
        specialtys: [
          {
            "id": "c1e1a7de-b446-45d2-bb5b-3d067a7705e2"
          },
          {
            "id": "c1e1a7de-b446-45d2-bb5b-3d067a7705e3"
          }
        ]
      };

      await doctorController.create(doctor);
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should able to update doctor', async() => {
    const doctor: CreateDoctorDto = {
      name: "Julia Alves",
      crm: "1CS4567",
      landline: 31945985898,
      cell_phone: 31945985892,
      cep: 32310330,
      specialtys: [
        {
          "id": "c1e1a7de-b446-45d2-bb5b-3d067a7705e2"
        },
        {
          "id": "c1e1a7de-b446-45d2-bb5b-3d067a7705e3"
        }
      ]
    };

    const result = await doctorController.update('0a10d29e-3044-4c4e-ad37-821407802b85', doctor);
    expect(result).toEqual(doctorResultUpdate)
  });

  it('should not able  to update doctor with incorrect cep ', async() => {
    expect(async () => {
      const doctor: CreateDoctorDto = {
        name: "Julia Caren",
        crm: "1CS4567",
        landline: 31945985898,
        cell_phone: 31945985892,
        cep: 98574520,
        specialtys: [
          {
            "id": "c1e1a7de-b446-45d2-bb5b-3d067a7705e2"
          },
          {
            "id": "c1e1a7de-b446-45d2-bb5b-3d067a7705e3"
          }
        ]
      };

      const result = await doctorController.update('0a10d29e-3044-4c4e-ad37-821407802b85', doctor);
    }).rejects.toBeInstanceOf(AppError);
  });
});
