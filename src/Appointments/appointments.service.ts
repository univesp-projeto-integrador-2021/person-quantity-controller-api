import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './entities/appointments.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  async create(user: User) {
    return await this.repository.save(user);
  }

  async findAll() {
    return await this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, user: User) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
