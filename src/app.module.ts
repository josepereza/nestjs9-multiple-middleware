import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AdiosMiddleware } from './middlewares/adios/adios.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';
import { Cats1Middleware } from './middlewares/cats1/cats1.middleware';
import { Cats2Middleware } from './middlewares/cats2/cats2.middleware';
import { HolaMiddleware } from './middlewares/hola/hola.middleware';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HolaMiddleware)
      .forRoutes('/hola')
      .apply(AdiosMiddleware)
      .forRoutes('/adios')
      .apply(Cats1Middleware, Cats2Middleware)
      .forRoutes(CatsController);
  }
}
