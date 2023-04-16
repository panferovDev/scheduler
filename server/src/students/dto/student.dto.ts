import { Transform, Type } from 'class-transformer';
import {
  IsNumber,
  IsArray,
  ArrayMinSize,
  ArrayNotEmpty,
  ValidateNested,
} from 'class-validator';

class Student {
  firstName: string;
  lastName: string;
}

export class StudentDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  students: Student[];

  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  group_id: number;
}
