import { Module } from '@nestjs/common'; 
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller'; 
import { UserModule } from '../users/users.module'; 
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      isGlobal : true
    }),
    UserModule,
    PassportModule,
    JwtModule.register({
        secret: process.env.KEYSALT,
        signOptions: { expiresIn: '1h' },
    })
],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})

export class AuthModule {}