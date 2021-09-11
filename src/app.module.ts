import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './Locations/location.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    LocationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
