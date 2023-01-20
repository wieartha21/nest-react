import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './modules/todo/todo.module'; 
import { AuthrMiddleware } from './middleware/auth.middleware'

@Module({
  imports: [TodoModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthrMiddleware)
      .forRoutes({ path: 'todo', method: RequestMethod.GET });
  }
} 
