import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { time } from "./functions";
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':ip')
  getInfo(@Param('ip') ip: string) {
	console.log(`[${time(new Date)}] Trying to return server info for ip: ${ip}`);
    return this.appService.getInfo(ip);
  }
}
