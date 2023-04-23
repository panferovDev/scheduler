import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DirectionModel } from 'src/dbModels/direction.model';
import { DirectionDto } from './dto/direction.tdo';

@Injectable()
export class DirectionService {
  constructor(
    @InjectModel(DirectionModel) private directionModel: typeof DirectionModel,
  ) {}

  public async getDirections() {
    return await this.directionModel.findAll({
      order: [['direction', 'ASC']],
      attributes: ['id', 'direction'],
    });
  }

  async getDirectionById(id: number) {
    return await this.directionModel.findOne({ where: { id } });
  }

  async deleteDirection(id: number) {
    await this.directionModel.destroy({ where: { id } });
  }

  async addDirection({ direction, weeks }: DirectionDto) {
    const [newDirection, created] = await this.directionModel.findOrCreate({
      where: { direction: direction },
      defaults: { weeks },
    });
    return { direction: newDirection, created };
  }
}
