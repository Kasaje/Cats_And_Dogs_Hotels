import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entities';
import { Pet_Sitter } from './pet_sitter.entities';
import { Admin } from './admin.entities';

@Entity()
export class Messages extends BaseEntity{

    @PrimaryGeneratedColumn()
    Message_ID : number;

    @Column()
    Datetime : Date;

    @Column()
    Message_text : string;

    @ManyToOne(() => User, (User) => User.Messages)
    User : User

    @ManyToOne(() => Pet_Sitter, (Pet_Sitter) => Pet_Sitter.Messages)
    Pet_Sitter : Pet_Sitter

    @ManyToOne(() => Admin, (Admin) => Admin.Messages)
    Admin : Admin

}