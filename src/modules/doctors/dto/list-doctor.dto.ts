import { ApiProperty } from '@nestjs/swagger';

export class ListDoctorDto {
  @ApiProperty({ example: 'Julia Caren', required: false })
  name?: string;

  @ApiProperty({ example: '1CS4567', required: false })
  crm?: string;

  @ApiProperty({ example: 31945985898, required: false })
  landline?: number;

  @ApiProperty({ example: 31945985892, required: false })
  cell_phone?: number;

  @ApiProperty({ example: 32310330, required: false })
  cep?: number;

  @ApiProperty({
    example: 'c1e1a7de-b446-45d2-bb5b-3d067a7705e2',
    required: false,
  })
  specialties?: string;

  @ApiProperty({ example: 'Rua gabirobas', required: false })
  address?: string;

  @ApiProperty({
    example: '0a10d29e-3044-4c4e-ad37-821407802b85',
    required: false,
  })
  id?: string;
}
