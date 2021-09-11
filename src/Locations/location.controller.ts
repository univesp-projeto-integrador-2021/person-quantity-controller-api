import {
  Controller, Get, Post, Body, Param, Delete,
} from '@nestjs/common';
import { LocationDTO } from './dto/location.dto';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  create(@Body() location: LocationDTO) {
    return this.locationService.create(location);
  }

  @Get()
  findAll() {
    return this.locationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locationService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationService.remove(+id);
  }
}
