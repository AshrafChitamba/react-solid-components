import { JSX, FC } from 'react';
import { ShowProps } from './type';

export const Show: FC<ShowProps> = (props): JSX.Element | null => {
  if (props.when) {
    if (typeof props.children === 'function') {
      return props.children();
    } else {
      return props.children;
    }
  } else return props.fallback ?? null;
};
