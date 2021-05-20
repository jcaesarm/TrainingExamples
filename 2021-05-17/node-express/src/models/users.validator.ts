import { IsDefined, IsEmail, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, Length, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class AddressValidator{

    @IsDefined({message: `City must be defined`})
    @IsString({message: `City must be string`})
    @IsNotEmpty({message: `City must be provided`})
    city?: string;
}

class CompanyValidator{

    @IsDefined({message: `Company name must be defined`})
    @IsString({message: `Company name must be string`})
    @IsNotEmpty({message: `Company name must be provided`})
    name?: string;
}

export class UsersValidator {

    @IsDefined({message: `Name must be defined `})
    @IsString({message: `Name must be a string `})
    @IsNotEmpty({message: `Name must be provided `})
    @Length(3, 8, {message: `Name must be between 3 - 8 characters`})
    name?: string;

    @IsDefined({message: `Email must be defined `})
    @IsEmail({}, {message: `Email is invalid`})
    email?: string;

    @IsDefined({message: `Password must be set `})
    @IsString({message: `Password must be a string `})
    @IsNotEmpty({message: `Password cannot be empty`})
    password?: string;

    @IsDefined({message: `Phone must be defined`})
    @IsString({message: `Phone must be string`})
    @IsNotEmpty({message: `Phone must be provided`})
    phone?: string;

    @IsDefined({message: `Address must be defined`})
    @IsObject({message: `Address cannot be empty`})
    @IsNotEmptyObject({}, {message: `Address cannot be empty `})
    @ValidateNested({message: `Address should be defined `})
    @Type(() => AddressValidator)
    address?: AddressValidator;

    @IsDefined({message: `Company must be defined `})
    @IsObject({message: `Company must be defined `})
    @IsNotEmptyObject({}, {message: `Company cannot be empty `})
    @ValidateNested({message: `Company should be defined `})
    @Type(() => CompanyValidator)
    company?: CompanyValidator;
   
}