import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDTO } from '../users/dto/create-user-dto';
import { User } from '../users/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(userDto: CreateUserDTO): Promise<User> {
    return await this.usersService.createUser(userDto);
  }
}
