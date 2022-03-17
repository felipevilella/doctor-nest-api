import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsController } from '../controllers/doctors.controller';
import { Doctor } from '../entities/doctor.entity';
import { DoctorsService } from '../services/doctors.service';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor])],
  controllers: [DoctorsController],
  providers: [DoctorsService],
})
export class DoctorsModule {}
