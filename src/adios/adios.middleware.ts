import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AdiosMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('adios')
    next();
  }
}
