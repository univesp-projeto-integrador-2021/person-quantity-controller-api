import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppoitmentService } from './appointments.service';
import { AppointmentController } from './appointments.controller';
import Appointment from './entities/appointments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment])],
  controllers: [AppointmentController],
  providers: [AppoitmentService],
})
export class AppointmentModule {}
