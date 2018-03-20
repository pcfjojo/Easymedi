import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity('client')
export class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    mobile: number;

    @Column()
    phone: number;

    @Column()
    dob: string;
}
