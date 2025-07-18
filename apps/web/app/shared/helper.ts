import { SyntheticEvent } from "react";

export const stopEvent = (e: SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
};
