import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../../entity/todo.entity';
import { throwError } from 'rxjs';

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

  async create(@Body() body){

    const todo : Todo = {
      'title' : body.title,
      'description' : body.description
    }

    var saveTodo = await this.todoRepository.save(todo).then((todo) => {
       return todo;
    }).catch((err) => {
       throwError;
    });

    return saveTodo;
    
  }

  async update(@Body() body){

    const todo : Todo = {
      'title' : body.title,
      'description' : body.description
    }

    var saveTodo = await this.todoRepository.update(body.id, todo).
    then((todo) => {
       return todo;
    }).catch((err) => {
       throwError;
    });

    return saveTodo;
    
  }
}