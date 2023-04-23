import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GroupModel } from 'src/dbModels/group.model';
import { StudentModel } from 'src/dbModels/student.model';
import { DirectionModel } from 'src/dbModels/direction.model';
import { GroupService } from 'src/group/group.service';
import { GroupModule } from 'src/group/group.module';
import { DirectionService } from 'src/direction/direction.service';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService, GroupService, DirectionService],
  imports: [
    SequelizeModule.forFeature([GroupModel, StudentModel, DirectionModel]),
    GroupModule,
  ],
})
export class DashboardModule {}
