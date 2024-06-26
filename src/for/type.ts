import { JSX } from "react";

export interface ForProps<T, K extends JSX.Element> {
  each: readonly T[];
  children: (item: T, index: number) => K;
  fallback?: JSX.Element;
}
