import { Controller, Get, Body, Post, Request, UseGuards } from '@nestjs/common'; 
import { AuthGuard } from '@nestjs/passport';
import { AuthService, credential } from './auth.service'


@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post("/login")
  login(@Body() body){ 
    const credential : credential = {
        'username' : body.username,
        'password' : body.password
    } 
    return this.authService.validateUser(credential);
  }

}