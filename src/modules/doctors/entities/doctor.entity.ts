import { Column, Entity, PrimaryColumn } from 'typeorm';

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
  is_delete: boolean;
}
