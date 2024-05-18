import { JSX } from 'react';

export interface ShowProps<T> {
  when: T | boolean | undefined | null;
  fallback?: JSX.Element;
  children: JSX.Element | (() => JSX.Element);
}
