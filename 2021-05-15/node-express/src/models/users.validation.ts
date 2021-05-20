import { IsEmail, IsObject, IsString, Length } from 'class-validator';

export class UserValidation {

    @IsString()
    @Length(3, 8)
    name?: string;

    @IsEmail()
    email?: string;

    @IsString()
    password?: string;

    @IsString()
    @Length(5, 10)
    phone?: string;

    @IsObject()
    address?: string;

    @IsObject()
    company?: string;
   
}