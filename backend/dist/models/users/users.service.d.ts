import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user-dto';
export declare class UsersService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    createUser(userDto: CreateUserDTO): Promise<User>;
}
