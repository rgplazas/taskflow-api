import { IsString, IsNotEmpty, IsEnum, IsOptional, IsDateString } from "class-validator";

export class CreateTaskDto{
    @IsString()
    @IsNotEmpty()
    title!:string;

    @IsEnum(['pending', 'in-progress', 'done'])
    @IsOptional()
    status?:string;

    @IsEnum([1,2,3])
    @IsOptional()
    priority?:string;

    @IsDateString()
    @IsOptional()
    due_date?:string;

}