import { Controller, Get, Inject } from '@nestjs/common';
import { GroupService } from 'src/group/group.service';
import { DirectionService } from 'src/direction/direction.service';

@Controller('dashboard')
export class DashboardController {
  constructor(
    @Inject(GroupService) private readonly groupService: GroupService,
    @Inject(DirectionService)
    private readonly directionService: DirectionService,
  ) {}

  @Get()
  async getDashboard() {
    const groups = await this.groupService.getGroups();
    const directions = await this.directionService.getDirections();

    return { groups, directions };
  }
}
