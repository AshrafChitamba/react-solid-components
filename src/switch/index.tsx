import React, { Fragment } from 'react';
import { FC } from 'react';
import { MatchProps, SwitchProps } from './type';
import { Show } from '../show';

export const Switch: FC<SwitchProps> = props => {
  const childNodes = Array.isArray(props.children)
    ? props.children
    : [props.children];

  if (childNodes.some(child => child.type !== Match)) {
    throw new Error('Switch can only have Match direct children');
  }

  for (const match of childNodes) {
    if (match.props.when) {
      return match;
    }
  }

  return <Fragment>{props.fallback ?? null}</Fragment>;
};

export const Match: FC<MatchProps> = props => {
  return (
    <Show when={props.when}>
      {typeof props.children === 'function' ? props.children() : props.children}
    </Show>
  );
};
