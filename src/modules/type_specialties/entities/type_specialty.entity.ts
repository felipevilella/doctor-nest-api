import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'type_specialties',
})
export class TypeSpecialty {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}
