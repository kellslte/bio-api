import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // eslint-disable-next-line @typescript-eslint/ban-types
  getHello(): Object {
    return this.appService.getHello();
  }
}
