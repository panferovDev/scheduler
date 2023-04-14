import type { StudentType } from './studentsType';

export type GroupType = {
  id: number;
  groupName: string;
  students: StudentType[];
};
