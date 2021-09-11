import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Appointment from './entities/appointments.entity';

@Injectable()
export class AppoitmentService {
  constructor(@InjectRepository(Appointment) private repository: Repository<Appointment>) {}

  async create(appointment: Appointment) {
    return await this.repository.save(appointment);
  }

  async findAll() {
    return await this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} appointment`;
  }

  update(id: number, appointment: Appointment) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
