import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service'

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get("/todo")
  getHello2(): string {
    return this.todoService.getHelloTodo();
  }
   
}