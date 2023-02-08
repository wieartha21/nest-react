import { Controller, Get, Body, Post, Request, UseGuards, Put } from '@nestjs/common'; 
import { AuthGuard } from '@nestjs/passport';
import { TodoService } from './todo.service'
import { TodoDto } from 'src/dto/todo.dto';

@Controller()
export class TodoController {

  constructor(
    private readonly todoService: TodoService
  ) {
    
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get("/todo")
  getAll(): any {
    return this.todoService.findAll();
  }

  // @UseGuards(AuthGuard('jwt'))
  @Post("/todo")
  createTodo(@Body() body : TodoDto): any {
    return this.todoService.create(body);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Put("/todo")
  updateTodo(@Body() body): any {
    return this.todoService.update(body);
  }

}