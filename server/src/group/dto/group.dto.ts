import { IsString, IsNumber, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';

export class GroupDtoCreate {
  @IsString()
  groupName: string;

  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @Min(1)
  @Max(3)
  phase: number;
}
