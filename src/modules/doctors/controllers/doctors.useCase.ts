// import { search } from 'src/shared/container/providers/PostOfficeZip';
// import { AppError } from 'src/shared/erros/AppError';
// import { CreateDoctorDto } from '../dto/create-doctor.dto';
// import { UpdateDoctorDto } from '../dto/update-doctor.dto';
// import { Doctor } from '../entities/doctor.entity';
// import { DoctorsService } from '../services/doctors.service';
// import { DoctorsSpecialtiesService } from '../services/doctors_specialties.service';

// export class DoctorsUseCase {
//   constructor(
//     private readonly doctorsService: DoctorsService,
//     private readonly doctorsSpecialtiesService: DoctorsSpecialtiesService,
//   ) {}

//   async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
//     const isExistCep = search(createDoctorDto.cep);

//     if (!isExistCep) {
//       throw new AppError('zip does not exist', 400);
//     }

//     if (
//       !createDoctorDto.type_specialtie_ids ||
//       createDoctorDto.type_specialtie_ids.length < 2
//     ) {
//       throw new AppError('The doctor must have at least two specialties', 400);
//     }

//     const doctors = await this.doctorsService.create(createDoctorDto);

//     const TypeSpecialtiesIds = createDoctorDto.type_specialtie_ids;

//     for (const typeScpecialityId of TypeSpecialtiesIds) {
//       await this.doctorsSpecialtiesService.create(typeScpecialityId);
//     }

//     return doctors;
//   }

//   async findOne(id: string): Promise<Doctor> {
//     const doctor = await this.doctorsService.findOne(id);
//     return doctor;
//   }

//   async update(id: string, updateDoctorDto: UpdateDoctorDto) {
//     return await this.doctorsService.update(id, updateDoctorDto);
//   }

//   async remove(id: string) {
//     return await this.doctorsService.remove(id);
//   }
// }
