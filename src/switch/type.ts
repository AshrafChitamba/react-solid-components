import { JSX, ReactElement } from 'react';

export interface MatchProps<T> {
  when: T | boolean | undefined | null;
  children: JSX.Element | (() => JSX.Element);
}

export interface SwitchProps<T> {
  fallback?: JSX.Element;
  children: ReactElement<MatchProps<T>> | ReactElement<MatchProps<T>>[];
}
