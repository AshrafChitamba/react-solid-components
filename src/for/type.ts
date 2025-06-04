import { JSX, ReactNode } from "react";

export interface ForProps<T, K extends ReactNode> {
  each: readonly T[];
  children: (item: T, index: number) => K;
  fallback?: JSX.Element;
}
