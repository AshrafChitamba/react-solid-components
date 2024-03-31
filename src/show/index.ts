import { ShowProps } from './type';

export const Show = (props: ShowProps): JSX.Element | null => {
  if (props.when) {
    if (typeof props.children === 'function') {
      return props.children();
    } else {
      return props.children;
    }
  } else return props.fallback ?? null;
};
