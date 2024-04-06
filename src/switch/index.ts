import { JSX } from 'react';
import { MatchProps, SwitchProps } from './type';

export const Switch = (props: SwitchProps): JSX.Element | null => {
  let children = props.children;

  if (!Array.isArray(children)) {
    children = [children];
  }

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.props.when) return child;
  }

  return props.fallback as JSX.Element;
};

export const Match = (props: MatchProps): JSX.Element | null => {
  if (props.when) {
    if (typeof props.children === 'function') {
      return props.children();
    } else {
      return props.children;
    }
  }

  return null;
};
