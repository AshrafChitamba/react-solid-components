import { ReactNode } from 'react';

export interface ShowProps {
  when: boolean | undefined | null;
  fallback?: ReactNode;
  children: ReactNode | (() => ReactNode);
}
