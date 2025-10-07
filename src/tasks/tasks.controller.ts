import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskservice: TasksService) {}

  @Get()
  findAll() {
    return this.taskservice.findAll();
  }

  @Get(':id')
  findOne() {
    return 'Get one task';
  }

  @Post()
  create() {
    return 'Create task';
  }

  @Delete(':id')
  delete() {
    return 'Delete task';
  }

  @Put(':id')
  update() {
    return 'Update task';
  }
}
