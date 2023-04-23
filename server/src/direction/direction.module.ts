import { Module } from '@nestjs/common';
import { DirectionController } from './direction.controller';
import { DirectionService } from './direction.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DirectionModel } from 'src/dbModels/direction.model';

@Module({
  controllers: [DirectionController],
  providers: [DirectionService],
  imports: [SequelizeModule.forFeature([DirectionModel])],
  exports: [DirectionService],
})
export class DirectionModule {}
