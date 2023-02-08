import { Injectable, NestMiddleware, UseGuards} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthGuard } from '@nestjs/passport';


@Injectable()
export class AuthrMiddleware implements NestMiddleware {

  @UseGuards(AuthGuard('jwt'))
  use(req: Request, res: Response, next: NextFunction) {
    next();
  }

}
