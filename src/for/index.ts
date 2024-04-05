import { JSX } from 'react';
import { ForProps } from './type';
  
export const For = <T, K extends JSX.Element>(props: ForProps<T, K>): K[] => {
  return props.each.map(props.children);
};
