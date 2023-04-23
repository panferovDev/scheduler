import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GroupModel } from 'src/dbModels/group.model';
import { StudentModel } from 'src/dbModels/student.model';
import { GroupController } from './group.controller';
import { DirectionModel } from 'src/dbModels/direction.model';

@Module({
  providers: [GroupService],
  imports: [
    SequelizeModule.forFeature([GroupModel, StudentModel, DirectionModel]),
  ],
  controllers: [GroupController],
  exports: [GroupService],
})
export class GroupModule {}
