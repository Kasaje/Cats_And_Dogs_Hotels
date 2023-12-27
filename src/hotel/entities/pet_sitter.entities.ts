import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Messages } from './messages.entities';
import { User } from './user.entities';

@Entity()
export class Pet_Sitter extends BaseEntity{

    @PrimaryGeneratedColumn()
    PS_ID : number;

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
    Phone : number;

    @OneToMany(() => Messages, (Messages) => Messages.Pet_Sitter,{
        eager : true
    })
    Messages : Messages[]

    @OneToMany(() => User, (User) => User.Pet_Sitter,{
        eager : true
    })
    User : User[]

}  