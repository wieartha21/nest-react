import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Todo } from '../../entity/todo.entity';
import { Users } from '../../entity/user.entity';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'nestjs-api-db',
        port: 3306,
        username: 'root',
        password: 'mauFJcuf5dhRMQrjj',
        database: 'nestjs_react',
        entities: [
          Todo, Users
        ],
        synchronize: true,
      }),
    ],
  })
  
 export class ConnectModule {}
