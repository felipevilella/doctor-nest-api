import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SpecialtiesService } from '../services/specialties.service';

@ApiTags('specialties')
@Controller('specialties')
export class SpecialtiesController {
  constructor(private readonly typeSpecialtiesService: SpecialtiesService) {}

  @Get()
  findAll() {
    return this.typeSpecialtiesService.findAll();
  }
}
