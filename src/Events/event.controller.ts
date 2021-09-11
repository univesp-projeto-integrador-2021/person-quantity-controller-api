import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { EventDTO } from './dto/event.dto';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  create(@Body() event: EventDTO) {
    return this.eventService.create(event);
  }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
