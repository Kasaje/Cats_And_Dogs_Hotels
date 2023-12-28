import { IsNotEmpty, IsEmail, IsStrongPassword, } from "class-validator";
import { Type } from "class-transformer";

export class createPet_SitterDTO {

    @IsNotEmpty()
    Firstname : string;

    @IsNotEmpty()
    Lastname : string;

    @IsNotEmpty()
    Username : string;

    @IsNotEmpty()
    @IsEmail()
    Email : string;

    @IsNotEmpty()
    @IsStrongPassword()
    Password : string;

    @IsNotEmpty()
    Phone : string;

}

export class createUserDTO {

    @IsNotEmpty()
    Firstname : string;

    @IsNotEmpty()
    Lastname : string;

    @IsNotEmpty()
    Username : string;

    @IsNotEmpty()
    @IsEmail()
    Email : string;

    @IsNotEmpty()
    @IsStrongPassword()
    Password : string;

    @IsNotEmpty()
    Phone : string;

}

