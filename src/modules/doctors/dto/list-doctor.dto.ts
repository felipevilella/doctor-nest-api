import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ListDoctorDto {
  @IsOptional()
  @ApiProperty({ example: 'Julia Caren' })
  name?: string;

  @IsOptional()
  @ApiProperty({ example: '1CS4567' })
  crm?: string;

  @IsOptional()
  @ApiProperty({ example: 31945985898 })
  landline?: number;

  @ApiProperty({ example: 31945985892 })
  cell_phone?: number;

  @ApiProperty({ example: 32310330 })
  cep?: number;

  @ApiProperty({
    example: 'c1e1a7de-b446-45d2-bb5b-3d067a7705e2',
  })
  specialties?: any[];

  @ApiProperty({ example: 'Rua gabirobas' })
  address?: string;

  @ApiProperty({
    example: '0a10d29e-3044-4c4e-ad37-821407802b85',
  })
  id?: string;
}
