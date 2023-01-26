import { Controller, Get, Post, Body } from '@nestjs/common'; 
import { UserService } from './users.service';
import { Users } from 'src/entity/user.entity';


@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/users")
  getUsers(): any {
    return this.userService.findAll();
  }

  @Post("/users")
  postUser(@Body() body): any {
    if(body.username !== null && body.password !== null){
        if(typeof(body.username) === "string" && typeof(body.password) === "string"){
            return this.userService.create({
                'username' : body.username,
                'password' : body.password
            });
        }else{
            return;
        }
    }  
  }
   
}