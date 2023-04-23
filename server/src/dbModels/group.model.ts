import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { StudentModel } from './student.model';
import { DirectionModel } from './direction.model';

@Table({ tableName: 'Groups' })
export class GroupModel extends Model<GroupModel> {
  @Column
  groupName: string;

  @Column
  phase: number;

  @ForeignKey(() => DirectionModel)
  @Column
  directionId: number;

  @HasMany(() => StudentModel)
  students: StudentModel[];

  @BelongsTo(() => DirectionModel)
  directionType: DirectionModel;
}
