import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('varchar')
  username: string;

  @Column('varchar', { unique: true })
  email: string;

  @Column('varchar')
  password: string;

  @Column('int', { nullable: false })
  role: number;

  @Column('varchar', {
    default:
      'https://res.cloudinary.com/dixbfipcw/image/upload/v1763565328/profile_aimu7y.jpg',
  })
  profile_pic: string;
}
