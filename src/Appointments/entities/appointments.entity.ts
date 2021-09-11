import {
  Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import Event from '../../Events/entities/event.entity';

@Entity('appointment')
export default class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
    // eslint-disable-next-line camelcase
    person_name: string;

  @OneToOne(() => Event)
  @JoinColumn()
  event: Event;
}
