import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocationDTO } from './dto/location.dto';
import Location from './entities/location.entity';

@Injectable()
export class LocationService {
  constructor(@InjectRepository(Location) private repository: Repository<Location>) {}

  async create(location: LocationDTO) {
    return await this.repository.save(location);
  }

  async findAll() {
    return await this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} Location`;
  }

  remove(id: number) {
    return `This action removes a #${id} Location`;
  }
}
