import { Meta, StoryObj } from '@storybook/react';
import { Switch, Match } from '../src';
import * as React from 'react';

/** This is component is used control conditional
 * rendering in a form of if-else-if-else...chain
 * making it more readable and modular */
const meta: Meta<typeof Switch> = {
  title: 'React Solid Components/Switch',
  component: Switch,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    fallback: <div>This is a fallback</div>,
  },

  render: () => (
    <div style={{ fontFamily: 'sans-serif', color: 'blueviolet' }}>
      <Switch>
        <Match when={true}>
          <div>divhere</div>
        </Match>
      </Switch>
    </div>
  ),
};
