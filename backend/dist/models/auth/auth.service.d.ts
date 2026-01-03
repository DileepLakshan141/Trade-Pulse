import { UsersService } from '../users/users.service';
import { CreateUserDTO } from '../users/dto/create-user-dto';
import { User } from '../users/entity/user.entity';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    signup(userDto: CreateUserDTO): Promise<User>;
}
