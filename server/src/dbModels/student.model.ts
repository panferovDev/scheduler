import {
  BelongsTo,
  Column,
  ForeignKey,
  Index,
  Model,
  Table,
} from 'sequelize-typescript';
import { GroupModel } from './group.model';

@Table({ tableName: 'Students' })
export class StudentModel extends Model<StudentModel> {
  @Index({ unique: true })
  @Column
  name: string;

  @ForeignKey(() => GroupModel)
  @Column
  group_id: number;

  @Column
  rating: number;

  @Column
  present: boolean;

  @BelongsTo(() => GroupModel)
  group: GroupModel;
}
