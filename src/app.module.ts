import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsModule } from './modules/doctors/modules/doctors.module';
import * as ormconfig from './config/orm';
import { SpecialtiesModule } from './modules/specialties/modules/specialties.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), DoctorsModule, SpecialtiesModule],
})
export class AppModule {}
