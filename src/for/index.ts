import { JSX } from 'react';
import { ForProps } from './type';

export const For = <T, K extends JSX.Element>(
  props: ForProps<T, K>
): K[] | JSX.Element | null => {
  if (props.each?.length) return props.each.map(props.children);
  else return props.fallback ?? null;
};
