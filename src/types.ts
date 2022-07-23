export type DeepPartial<T> = T extends Function
  ? T
  : T extends {}
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
