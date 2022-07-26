import { writable } from "svelte/store";

export type StoreValues = {
  duration: number;
  attendeeCount: number;
  salaries: (number | null)[];
  screen: "CALCULATOR" | "END";
  displayShareModal: boolean;
};

export const initVal: StoreValues = {
  duration: 0.25,
  attendeeCount: 0,
  salaries: [],
  screen: "CALCULATOR",
  displayShareModal: false,
};

export const calcStore = writable(initVal);
