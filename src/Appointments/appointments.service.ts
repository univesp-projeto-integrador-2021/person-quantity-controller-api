/* eslint-disable camelcase */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Appointment from './entities/appointments.entity';
import Event from '../Events/entities/event.entity';

@Injectable()
export class AppoitmentService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}

  async create(appointment: Appointment) {
    const appointmentExists = await this.appointmentRepository.find({
      where: { person_name: appointment.person_name },
    });

    if (appointmentExists.length) {
      throw new HttpException(
        'Você já está cadastrado nesse evento ;D',
        HttpStatus.BAD_REQUEST,
      );
    }

    const eventExists = await this.eventRepository.findOne(
      appointment.event[0].id,
    );
    const { id, available_vacancies } = eventExists;

    if (+available_vacancies < 1) {
      throw new HttpException(
        'O número de vagas para este evento está esgotado :(',
        HttpStatus.BAD_REQUEST,
      );
    }
    const appointmentCreated = await this.appointmentRepository.save({
      ...appointment,
    });

    const currentVacancies = +available_vacancies - 1;

    await this.eventRepository.update(id, {
      ...eventExists,
      available_vacancies: `${currentVacancies}`,
    });

    return appointmentCreated;
  }

  async findAll() {
    return await this.appointmentRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} appointment`;
  }

  update(id: number, appointment: Appointment) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
