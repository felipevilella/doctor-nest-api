import { Test, TestingModule } from '@nestjs/testing';
import { TypeSpecialtiesService } from '../services/type_specialties.service';
import { TypeSpecialtiesController } from './type_specialties.controller';

describe('TypeSpecialtiesController', () => {
  let controller: TypeSpecialtiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeSpecialtiesController],
      providers: [TypeSpecialtiesService],
    }).compile();

    controller = module.get<TypeSpecialtiesController>(TypeSpecialtiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
