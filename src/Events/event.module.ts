import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import Event from './entities/event.entity';
import Location from '../Locations/entities/location.entity';
import Appointment from '../Appointments/entities/appointments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Location, Appointment])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {
}
