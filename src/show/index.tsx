import React from 'react';
import { Fragment } from 'react';
import { ShowProps } from './type';

export const Show = (props: ShowProps) => {
  const shouldShow = !!props.when;

  return (
    <Fragment>
      {shouldShow
        ? typeof props.children === 'function'
          ? props.children()
          : props.children
        : props.fallback ?? null}
    </Fragment>
  );
};
