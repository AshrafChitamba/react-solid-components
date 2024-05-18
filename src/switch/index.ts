import { JSX } from 'react';
import { MatchProps, SwitchProps } from './type';

export const Switch = <T>(props: SwitchProps<T>): JSX.Element | null => {
  let children = props.children;

  // turning the child to be array all the times
  if (!Array.isArray(children)) {
    children = [children];
  }

  // filtering only match children
  const managedChildren = children.filter(child => child.type === Match);

  // Checking if the user has provided an invalid child other than Match
  if (managedChildren.length !== children.length) {
    throw new Error('Switch can only have Match direct children');
  }

  for (let i = 0; i < managedChildren.length; i++) {
    const child = children[i];

    if (child.props.when) return child;
  }

  return props.fallback as JSX.Element;
};

export const Match = <T>(props: MatchProps<T>): JSX.Element | null => {
  if (props.when) {
    if (typeof props.children === 'function') {
      return props.children();
    } else {
      return props.children;
    }
  }

  return null;
};
