import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { StudentModel } from 'src/dbModels/student.model';
import { StudentDto } from './dto/student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(StudentModel) private studentModel: typeof StudentModel,
  ) {}

  async addStudents(data: StudentDto) {
    const students = data.students.map((student) => ({
      group_id: data.group_id,
      name: `${student.firstName} ${student.lastName[0]}-${
        student.lastName[student.lastName.length - 1]
      }`,
      rating: 0,
      present: true,
    }));
    return await this.studentModel.bulkCreate(students, {
      ignoreDuplicates: true,
    });
  }
  async deleteStudent(id: number) {
    return await this.studentModel.destroy({ where: { id } });
  }
}
