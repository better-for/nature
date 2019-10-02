import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  getManager
} from 'typeorm';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  static registerUser = async (
    email: string,
    password: string,
    name: string
  ) => {
    const user = new User();
    user.email = email;
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    user.password = hash;
    user.name = name;

    return await getManager().save(user);
  };
}

export default User;
