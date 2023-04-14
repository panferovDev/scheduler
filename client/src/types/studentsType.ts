export type StudentType = {
  id: number;
  name: string;
  rating?: number;
  present?: boolean;
};

export type StudentsSubmitType = {
  group_id: number;
  students: string[][];
}