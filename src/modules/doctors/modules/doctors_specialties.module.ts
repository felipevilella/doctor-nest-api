import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsSpecialty } from '../entities/doctors_specialty.entity';
import { DoctorsSpecialtiesService } from '../services/doctors_specialties.service';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorsSpecialty])],
  providers: [DoctorsSpecialtiesService],
})
export class DoctorsSpecialtiesModule {}
