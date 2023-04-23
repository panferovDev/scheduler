export type NotifySliceType = {
  id: number;
  name: string;
  type: 'group' | 'student' | 'direction';
} | null;

export type NotifyType = {
    id: number;
    name: string;
    type: 'group' | 'student' | 'direction'; 
}