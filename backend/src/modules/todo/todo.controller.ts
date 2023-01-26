import { Controller, Get, Body, Post, Request, UseGuards } from '@nestjs/common'; 
import { AuthGuard } from '@nestjs/passport';
import { TodoService } from './todo.service'

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get("/todo")
  getHello2(): any {
    return this.todoService.findAll();
  }
   
}