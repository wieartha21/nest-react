import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn  } from 'typeorm';

@Entity()
export class Users {
  
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  status?: string;

  @CreateDateColumn()
  created_at?: Date; // Creation date
  
  @UpdateDateColumn()
  updated_at?: Date; // Last updated date

}