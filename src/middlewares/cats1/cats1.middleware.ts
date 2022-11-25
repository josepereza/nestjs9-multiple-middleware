import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class Cats1Middleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('mi cats1');
    next();
  }
}
