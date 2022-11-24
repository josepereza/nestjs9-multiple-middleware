import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AdiosMiddleware } from './adios/adios.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HolaMiddleware } from './hola/hola.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HolaMiddleware)
      .forRoutes('/hola')
      .apply(AdiosMiddleware)
      .forRoutes('/adios');
  }
}
