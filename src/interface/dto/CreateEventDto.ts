import { IsString, IsDate, IsArray } from 'class-validator';

export class CreateEventDto {
    @IsString()
    title!: string;

    @IsString()
    author!: string;

    @IsString()
    content!: string;

    @IsArray()
    tags!: [];

    @IsDate()
    publishedDate!: Date;
}
