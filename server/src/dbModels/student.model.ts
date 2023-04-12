import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'Students' })
export class StudentModel extends Model<StudentModel> {
  @Column
  name: string;
  @Column
  group_id: number;
  @Column
  rating: number;
  @Column
  present: boolean;
}
