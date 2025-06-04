import React from 'react';
import { FC, Fragment } from 'react';
import { MatchProps, SwitchProps } from './type';
import { For } from '../for';
import { Show } from '../show';

export const Switch: FC<SwitchProps> = props => {
  let children = props.children;

  if (!Array.isArray(children)) {
    children = [children];
  }

  if (children.some(child => child.type !== Match)) {
    throw new Error('Switch can only have Match direct children');
  }

  for (let i = 0; i < children.length; i++) {
    const child = children[i];

    if (child.props.when) return child;
  }

  return (
    <Fragment>
      <For each={children}>
        {child => <Show when={child.props.when}>{child}</Show>}
      </For>
    </Fragment>
  );
};

export const Match: FC<MatchProps> = props => {
  if (!!props.when) {
    if (typeof props.children === 'function') {
      return props.children();
    } else {
      return props.children;
    }
  }

  return null;
};
