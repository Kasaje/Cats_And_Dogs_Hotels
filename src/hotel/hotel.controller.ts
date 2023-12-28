import { Controller, Get, Post, Req, Body } from '@nestjs/common'
import { HotelService } from './hotel.service'
import { Request } from 'express'
import { createPet_SitterDTO, createUserDTO } from './hotel.dto'
import { User } from './entities/user.entities'
import { Pet_Sitter } from './entities/pet_sitter.entities'

@Controller('hotel')
export class HotelController{
    constructor(private readonly hotelService : HotelService){
    }

    @Get()
    getIndex() : string {
        return "OK"
    }

    @Post('createUser')
    createUser(@Body() User : createUserDTO) : Promise<User>{
        return this.hotelService.createUser(User);
    }

    @Post('createPet_Sitter')
    createPet_Sitter(@Body() Pet_Sitter : createPet_SitterDTO) : Promise<Pet_Sitter>{
        return this.hotelService.createPet_Sitter(Pet_Sitter);
    }


}