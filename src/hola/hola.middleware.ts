import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class HolaMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('hola')
    next();
  }
}
