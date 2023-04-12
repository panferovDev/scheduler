import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GroupModel } from 'src/dbModels/group.model';
import { StudentModel } from 'src/dbModels/student.model';
import { GroupController } from './group.controller';

@Module({
  providers: [GroupService],
  imports: [SequelizeModule.forFeature([GroupModel, StudentModel])],
  controllers: [GroupController],
})
export class GroupModule {}
