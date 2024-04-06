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
          <div>First match component</div>
        </Match>

        <Match when={props.name === 'A-Rahman'}>
          <div>Second match component</div>
        </Match>

        <Match when={props.name === 'Shareef'}>
          <div>Third match component</div>
        </Match>

        <Match when={props.name === 'Ashraf'}>
          <div>Fourth match component</div>
        </Match>

        <Match when={props.name === 'Marriam'}>
          <div>Fifth match component</div>
        </Match>
      </Switch>
    </div>
  );
};

export default SwitchExample;
