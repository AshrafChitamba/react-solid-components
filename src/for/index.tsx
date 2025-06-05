import React from 'react';
import { Fragment } from 'react';
import { ForProps } from './type';
import { Show } from '../show';

export const For = <T,>(props: ForProps<T>) => {
  return (
    <Fragment>
      <Show when={props.each.length > 0} fallback={props.fallback}>
        {props.each.map((item, index) => props.children(item, index))}
      </Show>
    </Fragment>
  );
};
