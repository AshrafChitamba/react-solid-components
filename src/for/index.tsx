import React from 'react';
import { Fragment, ReactNode } from 'react';
import { ForProps } from './type';

export const For = <T, K extends ReactNode>(props: ForProps<T, K>) => {
  return (
    <Fragment>
      {props.each.length
        ? props.each.map(props.children)
        : props.fallback ?? null}
    </Fragment>
  );
};
