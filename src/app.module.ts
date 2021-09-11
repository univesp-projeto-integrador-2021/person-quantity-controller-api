import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './Locations/location.module';
import { EventModule } from './Events/event.module';
import { AppointmentModule } from './Appointments/appointments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    LocationModule,
    EventModule,
    AppointmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
