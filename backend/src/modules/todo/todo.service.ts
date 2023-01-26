import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../../entity/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {
    console.log(todoRepository);
  }

  findAll(): Promise<Todo[]> { 
    return this.todoRepository.find(); 
  }

  findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.todoRepository.delete(id);
  }
}