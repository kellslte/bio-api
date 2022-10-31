import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // eslint-disable-next-line @typescript-eslint/ban-types
  getHello(): Object {
    return {
      slackUsername: 'Favour Max-Oti',
      backend: true,
      age: 26,
      bio: 'Backend heavy fullstack web developer',
    };
  }
}
