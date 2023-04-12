import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'Groups' })
export class GroupModel extends Model<GroupModel> {
  @Column
  groupname: string;
}
