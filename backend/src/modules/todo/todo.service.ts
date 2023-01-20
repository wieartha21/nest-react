import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getHelloTodo(): string {
    return 'Hello From Todo';
  }
}
