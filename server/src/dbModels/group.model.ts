import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { StudentModel } from './student.model';

@Table({ tableName: 'Groups' })
export class GroupModel extends Model<GroupModel> {
  @Column
  groupName: string;

  @HasMany(() => StudentModel)
  students: StudentModel[];
}
