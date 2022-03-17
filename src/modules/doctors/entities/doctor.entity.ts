import { Specialty } from '../../specialties/entities/specialty.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { uuid } from 'uuidv4';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'doctors',
})
export class Doctor {
  @PrimaryColumn()
  @ApiProperty()
  id: string;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  crm: string;

  @Column()
  @ApiProperty()
  landline: number;

  @Column()
  @ApiProperty()
  cell_phone: number;

  @Column()
  @ApiProperty()
  cep: number;

  @Column()
  @ApiProperty()
  address: string;

  @Column()
  @ApiProperty()
  is_delete: boolean;

  @ManyToMany(() => Specialty, (specialty) => specialty.id)
  @JoinTable()
  @ApiProperty()
  specialtys: Specialty[];

  constructor(doctor?: Partial<Doctor>) {
    this.id = doctor?.id;
    this.name = doctor?.name;
    this.crm = doctor?.crm;
    this.landline = doctor?.landline;
    this.cell_phone = doctor?.cell_phone;
    this.cep = doctor?.cep;
    this.address = doctor?.address;
    this.is_delete = doctor?.is_delete;
    this.specialtys = doctor?.specialtys;
  }
}
