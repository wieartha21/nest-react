import { Injectable } from '@nestjs/common'; 
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) { 

  }

  findAll(): Promise<Users[]> { 
    return this.userRepository.find(); 
  }

  findOne(id: number): Promise<Users> {
    return this.userRepository.findOneBy({ id });
  }

  async create (user : Users){ 

    // Compare Function
    // return bcrypt.compare('password123',"$2b$10$aQL8i8T8QEZRxEetHCWUzO/aZ6aaw80bSc5GaCOEoubWnJigyca5.");

    const salt = process.env.KEYSALT; 
    const saltRounds = 10; 
    user.password = await bcrypt.hash(user.password, saltRounds);
    user.status = "";
    return this.userRepository.save(user);

  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async getUserByUsername(username:string) : Promise<Users> {
    return this.userRepository.findOneBy({ "username" : username });
  }

}