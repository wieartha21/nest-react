import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'mauFJcuf5dhRMQrjj',
        database: 'nestjs_react',
        entities: [],
        synchronize: true,
      }),
    ],
  })
  export class ConnectModule {}