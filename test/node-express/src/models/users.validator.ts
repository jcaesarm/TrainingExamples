import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class AddressValidator{

    // @IsDefined({message: `City must be defined`})
    @IsString({message: `City must be string`})
    @IsNotEmpty({message: `City must be provided`})
    city?: string;

    // @IsDefined({message: `Street must be defined`})
    @IsString({message: `Street must be string`})
    @IsNotEmpty({message: `Street must be provided`})
    street?: string;
}

export class UsersValidator {

    // @IsDefined({message: `Name must be defined`})
    @IsString({message: `Name must be a string`})
    @IsNotEmpty({message: `Name must be provided`})
    name?: string;

    // @IsDefined({message: `Email must be defined`})
    @IsEmail({}, {message: `Email is invalid`})
    email?: string;

    // @IsDefined({message: `website must be defined`})
    @IsString({message: `website must be string`})
    @IsNotEmpty({message: `website must be provided`})
    website?: string;

    // @IsDefined({message: `Address must be defined`})
    @IsObject({message: `Address cannot be empty`})
    @IsNotEmptyObject({}, {message: `Address cannot be empty`})
    @ValidateNested()
    @Type(() => AddressValidator)
    address?: AddressValidator;

}