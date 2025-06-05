import { ReactNode } from 'react';

export interface ForProps<T> {
  each: readonly T[];
  children: (item: T, index: number) => ReactNode;
  fallback?: ReactNode;
}
