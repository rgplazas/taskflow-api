import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './task.schema.js';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private readonly model: Model<TaskDocument>){}

    findAll(){
        return this.model.find().sort({createdAt: -1}).exec();
    }

    async findOne(id:string){
        const t = await this.model.findById(id).exec();
        if(!t) throw new NotFoundException('Tarea no encontrada');
        return t;
    }

    create(dto: CreateTaskDto){
        return new this.model(dto).save();
    }

    update(id:string, dto:CreateTaskDto){
        return this.model.findByIdAndUpdate(id, dto, {new:true}).exec();
    }

    remove(id:string){
        return this.model.findByIdAndDelete(id).exec();
    }
}
