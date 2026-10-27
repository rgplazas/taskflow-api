import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class Task {
    @Prop({ required: true })
    title!: string;

    @Prop({ enum: ['pending', 'in-progress', 'done'], default: 'in-progress' })
    status!: 'pending' | 'in-progress' | 'done';

    @Prop({ enum: [1, 2, 3], default: 2 })
    priority!: 1 | 2 | 3;

    @Prop()
    due_date?: string;
}

export type TaskDocument = HydratedDocument<Task>;
export const TaskSchema = SchemaFactory.createForClass(Task);
