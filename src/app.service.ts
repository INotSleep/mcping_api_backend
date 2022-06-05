import { Injectable } from '@nestjs/common';
import { getServerInfo } from "./functions"

@Injectable()
export class AppService {

  getInfo(ip: string) {
    return getServerInfo(ip);
  }
}