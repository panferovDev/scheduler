import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentDto } from './dto/student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  async addStudents(@Body() students: StudentDto) {
    const studentsRaw = await this.studentsService.addStudents(students);
    return studentsRaw;
  }
  @Delete('/:id')
  async delStudent(@Param('id') id: string) {
    this.studentsService.deleteStudent(+id);
  }
}
