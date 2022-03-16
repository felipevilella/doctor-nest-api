import { Test, TestingModule } from '@nestjs/testing';
import { TypeSpecialtiesService } from '../type_specialties.service';

describe('TypeSpecialtiesService', () => {
  let service: TypeSpecialtiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeSpecialtiesService],
    }).compile();

    service = module.get<TypeSpecialtiesService>(TypeSpecialtiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
