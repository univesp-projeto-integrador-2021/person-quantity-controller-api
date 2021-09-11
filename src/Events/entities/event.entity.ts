/* eslint-disable camelcase */
import Location from 'src/Locations/entities/location.entity';
import {
  Column, Entity, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('event')
export default class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  day: string;

  @Column()
  start_date_time: string;

  @Column()
  end_date_time: string;

  @Column()
  vacancies: string;

  @Column()
  available_vacancies: string;

  @ManyToOne((type) => Location, (location) => location)
  location: Location;
}
