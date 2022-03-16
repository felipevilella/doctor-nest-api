import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorDto {
  @ApiProperty({ example: 'Julia Caren' })
  @Length(3, 120)
  @IsString()
  name: string;

  @ApiProperty({ example: '1CS4567' })
  @IsNotEmpty({ message: 'The doctor should have a crm' })
  @MaxLength(7)
  @IsString()
  crm: string;

  @ApiProperty({ example: 31945985898 })
  @IsNotEmpty({ message: 'The doctor should have a landline' })
  @IsNumber()
  landline: number;

  @ApiProperty({ example: 31945985892 })
  @IsNotEmpty({ message: 'The doctor should have a cellPhone' })
  @IsNumber()
  cell_phone: number;

  @ApiProperty({ example: 32310330 })
  @IsNotEmpty({ message: 'The doctor should have a CEP' })
  @IsNumber()
  cep: number;

  @ApiProperty({
    example: [
      'c1e1a7de-b446-45d2-bb5b-3d067a7705e2',
      'c1e1a7de-b446-45d2-bb5b-3d067a7705e3',
    ],
  })
  @IsNotEmpty({ message: 'The doctor should have a types specialties ids' })
  type_specialtie_ids?: any[];
}
