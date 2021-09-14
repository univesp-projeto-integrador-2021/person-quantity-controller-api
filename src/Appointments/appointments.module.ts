import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppoitmentService } from './appointments.service';
import { AppointmentController } from './appointments.controller';
import Appointment from './entities/appointments.entity';
import Event from '../Events/entities/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment, Event])],
  controllers: [AppointmentController],
  providers: [AppoitmentService],
})
export class AppointmentModule {}
