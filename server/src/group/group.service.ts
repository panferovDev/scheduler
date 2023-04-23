import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GroupModel } from 'src/dbModels/group.model';
import { StudentModel } from 'src/dbModels/student.model';
import { GroupFront } from './entities/group.entity';
import { DirectionModel } from 'src/dbModels/direction.model';

@Injectable()
export class GroupService {
  constructor(
    @InjectModel(GroupModel) private groupModel: typeof GroupModel,
    @InjectModel(StudentModel) private studentModel: typeof StudentModel,
    @InjectModel(DirectionModel) private directionModel: typeof DirectionModel,
  ) {}

  public async getGroups() {
    return await this.groupModel.findAll({
      include: [this.studentModel, this.directionModel],
    });
  }

  async getGroupById(id: number) {
    return await this.groupModel.findOne({
      where: { id },
      include: [this.studentModel],
    });
  }

  async deleteGroup(id: number) {
    await this.groupModel.destroy({ where: { id } });
  }

  async addGroup(
    group: GroupFront,
  ): Promise<{ group: GroupModel; created: boolean }> {
    const [newGroup, created] = await this.groupModel.findOrCreate({
      where: { groupName: group.groupName },
      defaults: {
        phase: group.phase,
        directionId: group.directionId,
      },
    });
    const groupWithStudents = await this.groupModel.findOne({
      where: { id: newGroup.id },
      include: [this.studentModel, this.directionModel],
    });
    return { group: groupWithStudents, created };
  }
}
