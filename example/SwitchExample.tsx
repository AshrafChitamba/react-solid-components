import * as React from 'react';
import { Switch, Match } from '../src';

type Props = {
  name: 'Shahida' | 'A-Rahman' | 'Shareef' | 'Ashraf' | 'Marriam';
};

const SwitchExample = (props: Props) => {
  return (
    <div style={{ fontFamily: 'sans-serif', color: 'blueviolet' }}>
      <Switch fallback={<div>This is a fallback</div>}>
        <Match when={props.name === 'Shahida'}>
          <div>{props.name} selected</div>
        </Match>

        <Match when={props.name === 'A-Rahman'}>
          <div>{props.name} selected</div>
        </Match>

        <Match when={props.name === 'Shareef'}>
          <div>{props.name} selected</div>
        </Match>

        <Match when={props.name === 'Ashraf'}>
          <div>{props.name} selected</div>
        </Match>

        <Match when={props.name === 'Marriam'}>
          <div>{props.name} selected</div>
        </Match>
      </Switch>
    </div>
  );
};

export default SwitchExample;
