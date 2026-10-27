import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller.js';
import { TasksService } from './tasks.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './task.schema.js';

@Module({
  imports:[MongooseModule.forFeature([{name:Task.name, schema:TaskSchema}])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
