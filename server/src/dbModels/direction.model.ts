import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'Directions' })
export class DirectionModel extends Model<DirectionModel> {
  @Column
  direction: string;

  @Column
  weeks: number;
}
