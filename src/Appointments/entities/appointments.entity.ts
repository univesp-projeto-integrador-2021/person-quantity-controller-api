import {
  Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import Event from '../../Events/entities/event.entity';

@Entity('appointment')
export default class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
    // eslint-disable-next-line camelcase
  person_name: string;

  @ManyToMany(() => Event)
  @JoinTable()
  event: Event[];
}
