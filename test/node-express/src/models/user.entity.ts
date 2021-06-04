import { Entity, PrimaryGeneratedColumn, Column, OneToOne} from 'typeorm'; 

import Address from './address.entity';

@Entity()
class User {
    
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    @Column({unique:true})
    email?: string;

    @Column()
    website?: string;

    @OneToOne(() => Address, address => address.user, {cascade: true})
    // @JoinColumn( {name: 'addressId'} )
    address?: Address;

}

export default User;
