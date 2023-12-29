import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { User } from './user.entities';
import { Pet_Sitter } from './pet_sitter.entities';
import { Messages } from './messages.entities';


@Entity()
export class Admin extends BaseEntity {

    @PrimaryGeneratedColumn()
    Admin_ID : number;

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

    @OneToMany(() => Messages, (Messages) => Messages.Admin,{
        eager : true
    })
    Messages : Messages[]

    @ManyToMany(() => User)
    @JoinTable()
    User : User[]

    @ManyToMany(() => Pet_Sitter)
    @JoinTable()
    Pet_Sitter : Pet_Sitter[]


}