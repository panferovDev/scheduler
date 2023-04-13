import { Body, Controller, Get, Post } from '@nestjs/common';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}
  @Get()
  async getGrops() {
    return this.groupService.getGroups();
  }

  @Post()
  async addGroup(@Body() groupName: { groupName: string }) {
    return this.groupService.addGroup(groupName);
  }
}
