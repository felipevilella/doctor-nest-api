import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsModule } from './modules/doctors/modules/doctors.module';
import * as ormconfig from './config/orm';
import { DoctorsSpecialtiesModule } from './modules/doctors/modules/doctors_specialties.module';
import { TypeSpecialtiesModule } from './modules/type_specialties/modules/type_specialties.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    DoctorsModule,
    TypeSpecialtiesModule,
    DoctorsSpecialtiesModule,
  ],
})
export class AppModule {}
