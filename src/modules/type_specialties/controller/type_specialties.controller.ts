import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TypeSpecialtiesService } from '../services/type_specialties.service';

@ApiTags('Type specialties')
@Controller('type-specialties')
export class TypeSpecialtiesController {
  constructor(
    private readonly typeSpecialtiesService: TypeSpecialtiesService,
  ) {}

  @Get()
  findAll() {
    return this.typeSpecialtiesService.findAll();
  }
}
