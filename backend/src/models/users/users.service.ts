import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user-dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async createUser(userDto: CreateUserDTO): Promise<User> {
    try {
      const duplicate_check = await this.userRepo.findOne({
        where: { email: userDto.email },
      });

      if (duplicate_check != null) {
        throw new HttpException(
          'provided email already registered to the system',
          HttpStatus.CONFLICT,
        );
      }
      const user = new User();
      user.email = userDto.email;
      user.username = userDto.username;
      user.password = userDto.password;
      user.role = userDto.role;
      return await this.userRepo.save(user);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'server side error while creating account',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
