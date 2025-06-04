import { FC } from 'react';
import { ShowProps } from './type';

export const Show: FC<ShowProps> = props => {
  if (!props.when) {
    if (typeof props.children === 'function') {
      return props.children();
    } else {
      return props.children;
    }
  } else return props.fallback ?? null;
};
