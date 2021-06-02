import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LogValidator{

    @IsString({message: `Origin must be string`})
    @IsNotEmpty({message: `Origin must be provided`})
    origin?: string;

    @IsNumber({}, {message: `City must be a number`})
    @IsNotEmpty({message: `City must be provided`})
    status?: number;

    @IsString({message: `Message must be string`})
    @IsNotEmpty({message: `Message must be provided`})
    message?: string;

}

