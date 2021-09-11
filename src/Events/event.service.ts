import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventDTO } from './dto/event.dto';
import Event from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(@InjectRepository(Event) private repository: Repository<Event>) {}

  async create(event: EventDTO) {
    return await this.repository.save(event);
  }

  async findAll() {
    return await this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
