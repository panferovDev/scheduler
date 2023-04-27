export type DirectionType = {
  id: number;
  direction: string;
};

export type DirectionFromApiType = {
  direction: DirectionType;
  created: boolean;
}

export type DirectionFormType = {
  direction: string;
  weeks: string;
}