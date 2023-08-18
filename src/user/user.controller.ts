import { Controller, Post, Get, Put, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../interfaces/user.interface';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: User) {
    return this.userService.createUser(user);
  }

  @Get(':username')
  async getUserByUsername(@Param('username') username: string) {
    return this.userService.getUserByUsername(username);
  }

  @Put(':username')
  async updateUser(@Param('username') username: string, @Body() user: User) {
    return this.userService.updateUser(username, user);
  }
}
