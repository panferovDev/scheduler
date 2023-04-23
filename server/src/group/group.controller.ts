import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupDtoCreate } from './dto/group.dto';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}
  @Get()
  async getGrops() {
    return this.groupService.getGroups();
  }

  @UsePipes(new ValidationPipe())
  @Post()
  async addGroup(@Body() group: GroupDtoCreate) {
    return this.groupService.addGroup(group);
  }

  @Delete('/:id')
  async delGroup(@Param('id') id: string) {
    this.groupService.deleteGroup(+id);
  }
}
