import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/CreateUserDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id) {
    return this.usersService.getOne(+id);
  }

  @Post('')
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  )
  createOne(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createOne(createUserDto);
  }
}
