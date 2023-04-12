import { Controller, Post } from '@nestjs/common';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}
  @Post()
  async createGroup() {}
}
