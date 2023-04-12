import type { StudentType } from './studentsType';

export type GroupType = {
  id?: number;
  name: string;
  students?: StudentType[];
};
