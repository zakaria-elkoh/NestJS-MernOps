import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  getAll() {
    return this.usersRepository.find();
  }

  getOne(id) {
    return this.usersRepository.findOne({ where: id });
  }

  createOne(user) {
    const createdUser = this.usersRepository.create(user);
    return this.usersRepository.save(createdUser);
  }
}
