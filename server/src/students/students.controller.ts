import { Body, Controller, Post } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentDto } from './dto/student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  async addStudents(@Body() students: StudentDto) {
    const studentsRaw = await this.studentsService.addStudents(students);
    return studentsRaw;
  }
}
