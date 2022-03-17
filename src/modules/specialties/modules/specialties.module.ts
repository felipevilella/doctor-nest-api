import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialtiesController } from '../controller/specialties.controller';
import { Specialty } from '../entities/specialty.entity';
import { SpecialtiesService } from '../services/specialties.service';

@Module({
  imports: [TypeOrmModule.forFeature([Specialty])],
  controllers: [SpecialtiesController],
  providers: [SpecialtiesService],
})
export class SpecialtiesModule {}
