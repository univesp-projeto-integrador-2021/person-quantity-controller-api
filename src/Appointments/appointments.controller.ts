import {
  Controller, Get, Post, Body, Patch, Param, Delete,
} from '@nestjs/common';
import { Appointment } from './dto/appointments.dto';
import { AppoitmentService } from './appointments.service';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppoitmentService) {
  }

  @Post()
  create(@Body() appointment: Appointment) {
    const appointmentToCreate = { ...appointment, event: [appointment.event] };

    return this.appointmentService.create(appointmentToCreate);
  }

  @Get()
  findAll() {
    return this.appointmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentService.remove(+id);
  }
}
