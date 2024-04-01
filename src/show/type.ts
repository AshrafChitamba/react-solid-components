export interface ShowProps {
  when: boolean | undefined | null;
  fallback?: JSX.Element;
  children: JSX.Element | (() => JSX.Element);
}

