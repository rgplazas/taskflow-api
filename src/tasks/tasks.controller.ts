import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TasksService } from './tasks.service.js';
import { CreateTaskDto } from './dto/create-task.dto.js';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasks: TasksService) {}

    @Get()
    findAll() {
        return this.tasks.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.tasks.findOne(id);
    }

    @Post()
    create(@Body() dto: CreateTaskDto) {
        return this.tasks.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: CreateTaskDto) {
        return this.tasks.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.tasks.remove(id);
    }
}
