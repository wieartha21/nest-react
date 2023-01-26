import { Injectable, UnauthorizedException  } from '@nestjs/common'; 
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

export type credential = {
    'username' : string,
    'password' : string
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userService : UserService,
    private jwtService: JwtService,
  ) {
     
  }

  /**
   * Login without jwt
   * @param body 
   * @returns User | UnauthorizedException
   */
  async login(body : credential){
    if(body.username !== ""){
        let tryAuth = await this.userService.getUserByUsername(body.username)
        .then(async (user) => {
            if(await bcrypt.compare(body.password, user.password)){
                //here we need to sign jwt for next process  
                return user;
            }else{
                throw new UnauthorizedException();
            }
        }); 
        return tryAuth;
    } else {
        throw new UnauthorizedException();
    }
  }

  /**
   * 
   * @param body Login with jwt token
   * @returns 
   */
  async validateUser(body : credential){
    if(body.username !== ""){
        let tryAuth = await this.userService.getUserByUsername(body.username)
        .then(async (user) => {
            if(await bcrypt.compare(body.password, user.password)){
                //here we need to sign jwt for next process  
                return { ...user,
                    'access_token' : this.jwtService.sign({ ...user }),
                };
            }else{
                throw new UnauthorizedException();
            }
        }); 
        return tryAuth;
    } else {
        throw new UnauthorizedException();
    }
  }

}