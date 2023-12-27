import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from './user.entities';
import { Activity } from './activity.entities';

@Entity()
export class Pet extends BaseEntity{

    @PrimaryGeneratedColumn()
    Pet_ID : number;

    @Column()
    Name : string;

    @Column()
    Description : string;

    @Column()
    Food_allergies : string;

    @ManyToOne(() => User, (User) => User.Pet)
    User : User

    @ManyToMany(() => Activity)
    @JoinTable()
    Activity : Activity[]

}