import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne
} from 'typeorm';
import Store from './Store';

@Entity()
class BussinessHour {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  dayOfWeek: string;

  @ManyToOne(type => Store, store => store.bussinessHours)
  @JoinColumn()
  store: Store;

  @Column()
  openMin: string;

  @Column()
  closeMin: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default BussinessHour;
