import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable
} from 'typeorm';
import BussinessHour from './BussinessHour';
import VegiType from './VegiType';

@Entity()
class Store {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  lat: string;

  @Column()
  lon: string;

  @Column()
  address: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(type => BussinessHour, bussinessHour => bussinessHour.store)
  bussinessHours: BussinessHour[];

  @ManyToMany(type => VegiType, vegiType => vegiType.stores)
  @JoinTable()
  vegiTypes: VegiType[];
}

export default Store;
