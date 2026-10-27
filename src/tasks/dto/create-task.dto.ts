import { IsString, IsNotEmpty, IsEnum, IsOptional, IsDateString } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsEnum(['pending', 'in-progress', 'done'])
    @IsOptional()
    status?: 'pending' | 'in-progress' | 'done';

    @IsEnum([1, 2, 3])
    @IsOptional()
    priority?: 1 | 2 | 3;

    @IsDateString()
    @IsOptional()
    due_date?: string;
}
