export type DirectionType = {
  id: number;
  direction: string;
};

export type DirectionFromApiType = {
  direction: DirectionType;
  created: boolean;
}