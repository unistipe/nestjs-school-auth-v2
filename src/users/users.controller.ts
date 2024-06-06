import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Roles(Role.Admin)
  async getAllUsers() {
    return this.usersService.findAll();
  }
}
