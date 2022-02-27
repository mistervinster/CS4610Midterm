import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { Skip } from 'server/decorators/skip.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { AuthGuard } from 'server/providers/guards/auth.guard';
import { TodosService } from 'server/providers/services/todos.service';
import { Todo } from 'server/entities/todo.entity'

class todoBody{
  content: string;
}

@Controller()
@Skip(AuthGuard)
export class Question5Controller {
  constructor(private todosService: TodosService) {}

  @Get('/todos')
  public async index() {
    const todos = await this.todosService.findAll();
    return { todos };
  }

  @Post('/todos')
  public async create(@JwtBody() JwtBody: JwtBodyDto, @Body() body: todoBody ){
    let todo = new Todo();
    todo.content = body.content;
    todo.isComplete = false;
    todo = await this.todosService.createTodo(todo);
    return { todo };
  }

  @Put('/todos/:id')
  public async update(@JwtBody() JwtBody: JwtBodyDto, @Param('id') id: string){
    let todo = await this.todosService.findById(parseInt(id));
    todo.isComplete = !todo.isComplete;
    await this.todosService.updateTodo(todo);
    return { todo };
  }
}
