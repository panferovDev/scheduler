import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { GroupModel } from 'src/dbModels/group.model';
import { StudentModel } from 'src/dbModels/student.model';

@Module({
  providers: [StudentsService],
  imports: [SequelizeModule.forFeature([GroupModel, StudentModel])],
  controllers: [StudentsController],
})
export class StudentsModule {}
