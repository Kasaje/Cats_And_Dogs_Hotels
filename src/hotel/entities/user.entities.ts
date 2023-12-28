import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Pet } from './pet.entities';
import { Messages } from './messages.entities';
import { Pet_Sitter } from './pet_sitter.entities';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    User_ID : number;

    @Column()
    Firstname : string;

    @Column()
    Lastname : string;

    @Column()
    Username : string;

    @Column()
    Email : string;

    @Column()
    Password : string;

    @Column()
    Phone : string;

    @OneToMany(() => Pet, (pet) => pet.User, {
        eager : true
    })
    Pet : Pet[]

    @OneToMany(() => Messages, (Messages) => Messages.User,{
        eager : true
    })
    Messages : Messages[]

    @ManyToOne(() => Pet_Sitter, (Pet_Sitter) => Pet_Sitter.User)
    Pet_Sitter : Pet_Sitter

}