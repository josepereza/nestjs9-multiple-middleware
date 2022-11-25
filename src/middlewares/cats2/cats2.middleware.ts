import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class Cats2Middleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('mi cats2');
    next();
  }
}
