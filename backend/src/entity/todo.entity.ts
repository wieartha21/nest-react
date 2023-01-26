import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn  } from 'typeorm';

@Entity()
export class Todo {
  
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column()
  description?: string;

  @Column()
  status?: string;

  @CreateDateColumn()
  created_at?: Date; // Creation date
  
  @UpdateDateColumn()
  updated_at?: Date; // Last updated date
 
}