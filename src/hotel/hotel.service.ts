import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
// CreateUser
import { User } from './entities/user.entities'
import { createUserDTO } from './hotel.dto'
// Create Pet_Sitter
import { Pet_Sitter } from './entities/pet_sitter.entities'
import { createPet_SitterDTO } from './hotel.dto'

@Injectable()
export class HotelService{
    constructor(
        @InjectRepository(User)
        private Userrepository : Repository<User>,
        @InjectRepository(Pet_Sitter)
        private Pet_Sitterrepository : Repository<Pet_Sitter>
    ){}

    createUser(User : createUserDTO) : Promise<User|null>{
        return this.Userrepository.save(User);
    }

    createPet_Sitter(Pet_Sitter : createPet_SitterDTO) : Promise<Pet_Sitter|null>{
        return this.Pet_Sitterrepository.save(Pet_Sitter);
    }


}