import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Activity extends BaseEntity{

    @PrimaryGeneratedColumn()
    Activity_ID : number;

    @Column()
    Activity_Name : string;

    @Column()
    Activity_Description : string;

    @Column()
    Activity_Price : number;

    @Column()
    Other : string;

}