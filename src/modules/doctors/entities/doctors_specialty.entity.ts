import { TypeSpecialty } from 'src/modules/type_specialties/entities/type_specialty.entity';
import { Column, Entity, JoinColumn, ManyToMany, PrimaryColumn } from 'typeorm';
import { Doctor } from './doctor.entity';

@Entity({
  name: 'doctors_specialties',
})
export class DoctorsSpecialty {
  @PrimaryColumn()
  id: string;

  @Column()
  doctor_id: string;

  @Column()
  type_specialtie_id: string;

  @ManyToMany(() => Doctor)
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;

  @ManyToMany(() => TypeSpecialty)
  @JoinColumn({ name: 'type_specialtie_id' })
  typeSpecialties: TypeSpecialty;
}
