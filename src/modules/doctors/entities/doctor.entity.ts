import { Specialty } from '../../specialties/entities/specialty.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity({
  name: 'doctors',
})
export class Doctor {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  crm: string;

  @Column()
  landline: number;

  @Column()
  cell_phone: number;

  @Column()
  cep: number;

  @Column()
  address: string;

  @Column()
  is_delete: boolean;

  @ManyToMany(() => Specialty, { eager: true, cascade: true })
  @JoinTable()
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
  }
}
