import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './create-student.input';
import { StudentType } from './student.type';
import { StudentService } from './student.service';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query((returns) => StudentType)
  async student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  @Query((returns) => [StudentType])
  async getStudents() {
    return this.studentService.getStudents();
  }

  @Mutation((returns) => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
