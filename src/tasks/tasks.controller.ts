import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskservice: TasksService) {}

  @Get()
  findAll() {
    return this.taskservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskservice.findOne(id);
  }

  @Post()
  create(@Body() body: CreateTaskDto) {
    return this.taskservice.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskservice.delete(id); 
  }

  @Put(':id')
  update() {
    return 'Update task';
  }
}
