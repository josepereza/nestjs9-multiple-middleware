import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hola')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/adios')
  getAdios(): string {
    return this.appService.getAdios();
  }
}
