import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GroupModel } from 'src/dbModels/group.model';
import { StudentModel } from 'src/dbModels/student.model';

@Injectable()
export class GroupService {
  constructor(
    @InjectModel(GroupModel) private groupModel: typeof GroupModel,
    @InjectModel(StudentModel) private studentModel: typeof StudentModel,
  ) {}

  async getGroups() {
    return await this.groupModel.findAll({
      include: [this.studentModel],
    });
  }

  async getGroupById(id: number) {
    return await this.groupModel.findOne({
      where: { id },
      include: [this.studentModel],
    });
  }

  async addGroup(groupName: { groupName: string }): Promise<GroupModel> {
    const [newGroup] = await this.groupModel.findOrCreate({
      where: { groupName: groupName.groupName },
    });
    return await this.getGroupById(newGroup.id);
  }
}
