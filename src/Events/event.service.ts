/* eslint-disable camelcase */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import Location from '../Locations/entities/location.entity';
import { EventDTO } from './dto/event.dto';
import Event from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  async create(event: EventDTO): Promise<Omit<Event, 'location_id'>> {
    const { location_id } = event;
    const location = await this.locationRepository.findOne(location_id);

    if (!location) {
      throw new Error(`Location with id ${location_id} not found`);
    }
    // eslint-disable-next-line no-param-reassign
    delete event.location_id;

    const eventToCreate = {
      ...event,
      location,
    };

    return await this.eventRepository.save(eventToCreate);
  }

  async findAll(...filter) {
    const [{ name, location }] = filter;
    const possibleFilters = ['name', 'location'];
    let filterIncludes;
    if (name || location) {
      // eslint-disable-next-line array-callback-return
      filterIncludes = filter.map((arg) => {
        if (possibleFilters.includes(Object.keys(arg)[0])) {
          return name ? { name: Like(`%${name}%`) } : { location };
        }
      });
    }

    return await this.eventRepository.find({
      relations: ['location'],
      where: filterIncludes,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
