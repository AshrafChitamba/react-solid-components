import { ReactElement, ReactNode } from 'react';

export interface MatchProps {
  when: boolean | undefined | null;
  children: ReactNode | (() => ReactNode);
}

export interface SwitchProps {
  fallback?: ReactNode;
  children: ReactElement<MatchProps> | ReactElement<MatchProps>[];
}
