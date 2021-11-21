import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from './interface/user.interface';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isVerified: boolean;

  @Column({ default: true })
  isActive: boolean;
}
