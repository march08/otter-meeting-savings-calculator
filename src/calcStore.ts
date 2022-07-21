import { writable } from "svelte/store";

export type StoreValues = {
  duration: number;
  attendeeCount: number;
  salaries: (number | null)[];
};

export const initVal: StoreValues = {
  duration: 0.75,
  attendeeCount: 0,
  salaries: [],
};

export const calcStore = writable(initVal);
