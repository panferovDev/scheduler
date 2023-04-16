import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { StudentModel } from './student.model';

@Table({ tableName: 'Groups' })
export class GroupModel extends Model<GroupModel> {
  @Column
  groupName: string;

  @Column
  phase: number;

  @HasMany(() => StudentModel)
  students: StudentModel[];
}
