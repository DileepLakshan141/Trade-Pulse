import { AuthService } from './auth.service';
import { CreateUserDTO } from '../users/dto/create-user-dto';
import { User } from '../users/entity/user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(userDTO: CreateUserDTO): Promise<User>;
}
