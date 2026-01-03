declare enum Role {
    CASHIER,
    ADMIN,
    MANAGER,
    OWNER,
    CUSTOMER
}
export declare class CreateUserDTO {
    username: string;
    email: string;
    password: string;
    role: Role;
    profile_pic: string;
}
export {};
