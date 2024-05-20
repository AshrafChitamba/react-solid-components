import { JSX, ReactElement } from 'react';

export interface MatchProps {
  when: boolean | undefined | null;
  children: JSX.Element | (() => JSX.Element);
}

export interface SwitchProps {
  fallback?: JSX.Element;
  children: ReactElement<MatchProps> | ReactElement<MatchProps>[];
}
