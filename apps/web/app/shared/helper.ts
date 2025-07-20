import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { SyntheticEvent } from "react";

export const stopEvent = (e: SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
