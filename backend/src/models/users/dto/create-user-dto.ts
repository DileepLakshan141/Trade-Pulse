import { Exclude } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { USER_ROLES } from 'src/common/constants/roles';

enum Role {
  CASHIER = USER_ROLES.CASHIER,
  ADMIN = USER_ROLES.ADMIN,
  MANAGER = USER_ROLES.MANAGER,
  OWNER = USER_ROLES.OWNER,
  CUSTOMER = USER_ROLES.CUSTOMER,
}

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Exclude()
  password: string;

  @IsEnum(Role)
  @IsNotEmpty()
  role: Role;

  @IsString()
  @IsOptional()
  profile_pic: string;
}
