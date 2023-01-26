import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { ConnectModule } from './modules/dbConnect/connect.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './modules/todo/todo.module'; 
import { AuthrMiddleware } from './middleware/auth.middleware' 
import { UserModule } from './modules/users/users.module'; 
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal : true
  }),TodoModule, ConnectModule, UserModule, AuthModule ],
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
