import { Test, TestingModule } from '@nestjs/testing';
import { DoctorsService } from './doctors.service';

describe('DoctorsService', () => {
  let service: DoctorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: DoctorsService,
          useValue: {
            create: jest.fn,
            find: jest.fn,
            update: jest.fn,
            remove: jest.fn
          }
        }
      ],
    }).compile();

    service = module.get<DoctorsService>(DoctorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
