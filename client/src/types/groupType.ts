import type { DirectionType } from './directionsType';
import type { StudentType } from './studentsType';

export type GroupType = {
  id: number;
  groupName: string;
  students: StudentType[];
  phase: number;
  directionId: number;
  directionType: DirectionType | null;
};
