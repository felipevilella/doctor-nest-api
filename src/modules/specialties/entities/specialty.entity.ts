import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'specialties',
})
export class Specialty {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}
