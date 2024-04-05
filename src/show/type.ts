import { JSX } from "react";

export interface ShowProps {
  when: boolean | undefined | null;
  fallback?: JSX.Element;
  children: JSX.Element | (() => JSX.Element);
}

