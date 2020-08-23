import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToMany } from 'typeorm';
import Store from './Store';

@Entity()
class VegiType {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(type => Store, store => store.vegiTypes)
  stores: Store[];
}

export default VegiType;
