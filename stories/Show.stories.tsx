import { Meta, StoryObj } from '@storybook/react';
import { Show } from '../src';
import * as React from 'react';

/** This is component is used control conditional
 * rendering making it more readable and modular */
const meta: Meta<typeof Show> = {
  title: 'React Solid Components/Show',
  component: Show,
};

export default meta;

type Story = StoryObj<typeof meta>;

const name: string = 'Ashraf';
/**  An example where a when condition is met */
export const First: Story = {
  name: 'ConditionMet',
  render: () => (
    <div style={{ fontFamily: 'sans-serif', color: 'blueviolet' }}>
      <Show
        when={name === 'Ashraf'}
        fallback={<span>The condition is not met</span>}
      >
        <span>The condition is met</span>
      </Show>
    </div>
  ),
};

/**  An example where a when condition is not met */
export const Second: Story = {
  name: 'ConditionNotMet',
  render: () => (
    <div style={{ fontFamily: 'sans-serif', color: 'blueviolet' }}>
      <Show
        when={name === 'Shareef'}
        fallback={<span>The condition is not met</span>}
      >
        <span>The condition is met</span>
      </Show>
    </div>
  ),
};

/**  An example where a when condition is not met and the fallback is not provided */
export const Third: Story = {
  name: 'NothingToShow',
  render: () => (
    <div style={{ fontFamily: 'sans-serif', color: 'blueviolet' }}>
      <Show when={name === 'Shahida'}>
        <span>The condition is met</span>
      </Show>
    </div>
  ),
};
