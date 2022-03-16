import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeSpecialtiesController } from '../controller/type_specialties.controller';
import { TypeSpecialty } from '../entities/type_specialty.entity';
import { TypeSpecialtiesService } from '../services/type_specialties.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeSpecialty])],
  controllers: [TypeSpecialtiesController],
  providers: [TypeSpecialtiesService],
})
export class TypeSpecialtiesModule {}
