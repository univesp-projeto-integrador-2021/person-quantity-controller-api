import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('location')
export default class Location {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  street: string;

  @Column()
  neighborhood: string;

  @Column()
  // eslint-disable-next-line camelcase
  house_number: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  cep: string;
}
