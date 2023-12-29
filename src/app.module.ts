import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelController } from './hotel/hotel.controller'; 
import { HotelService } from './hotel/hotel.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

// Entity
import { User } from './hotel/entities/user.entities';
import { Pet } from './hotel/entities/pet.entities';
import { Messages } from './hotel/entities/messages.entities';
import { Pet_Sitter } from './hotel/entities/pet_sitter.entities';
import { Activity } from './hotel/entities/activity.entities';
import { Admin } from './hotel/entities/admin.entities';

@Module({
  imports: [ 
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports : [ConfigModule],
      useFactory : ( configService : ConfigService ) =>{
        let option : TypeOrmModuleOptions = {
          type : 'sqlite',
          database : configService.get<string>('DATABASE_NAME','database.db'),
          entities : [User, Pet, Pet_Sitter, Messages, Activity, Admin],
          synchronize : true
        }
        return option;
      },      
      inject : [ ConfigService ]
    }),

    TypeOrmModule.forFeature([ User, Pet, Pet_Sitter, Messages, Activity, Admin ])

  ],
  controllers: [AppController, HotelController],
  providers: [AppService, HotelService],
})
export class AppModule {}
