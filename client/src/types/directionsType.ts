export type DirectionType = {
  id: number;
  direction: string;
  weeks: number;
};

export type DirectionFromApiType = {
  direction: DirectionType;
  created: boolean;
}

export type DirectionFormType = {
  direction: string;
  weeks: string;
}