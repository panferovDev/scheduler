import { Transform } from 'class-transformer';
import { IsNumber, IsString, Max, Min } from 'class-validator';

export class DirectionDtoDelete {
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  id: number;
}

export class DirectionDto {
  @IsString()
  direction: string;

  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @Min(1)
  @Max(5)
  weeks: number;
}
