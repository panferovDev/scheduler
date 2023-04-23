import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DirectionService } from './direction.service';
import { DirectionDto, DirectionDtoDelete } from './dto/direction.tdo';

@Controller('direction')
export class DirectionController {
  constructor(
    @Inject(DirectionService)
    private readonly directionService: DirectionService,
  ) {}

  @Get()
  async getDirections() {
    return this.directionService.getDirections();
  }

  @UsePipes(new ValidationPipe())
  @Post()
  async addDirection(@Body() direction: DirectionDto) {
    return this.directionService.addDirection(direction);
  }

  @UsePipes(new ValidationPipe())
  @Delete('/:id')
  async deleteDirection(@Param() { id }: DirectionDtoDelete) {
    return this.directionService.deleteDirection(id);
  }
}
