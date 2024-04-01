import { Meta, StoryObj } from '@storybook/react';
import { For } from '../src';
import * as React from 'react';
import { ChildName, ChildDetails } from '../example/Child';

const meta: Meta<typeof For> = {
  title: 'React Solid Components/For',
  component: For,
};

export default meta;

type Story = StoryObj<typeof meta>;

/**  Looping through an array of strings */
const strArray = ['Shahida', 'A-Rahman', 'Shareef', 'Ashraf', 'Marriam'];

export const First: Story = {
  storyName: 'String Array',
  name: 'StringArray',
  render: () => (
    <div>
      <For each={strArray}>
        {(name, index) => <ChildName key={index} name={name} index={index} />}
      </For>
    </div>
  ),
};

/**  Looping through an array of objects */
const objArray = [
  {
    name: 'Shahida',
    age: 28,
    gender: 'Female',
  },
  {
    name: 'A-Rahman',
    age: 26,
    gender: 'Male',
  },
  {
    name: 'Shareef',
    age: 23,
    gender: 'Male',
  },
  {
    name: 'Ashraf',
    age: 22,
    gender: 'Male',
  },
  {
    name: 'Marriam',
    age: 17,
    gender: 'Female',
  },
];

export const Second: Story = {
  storyName: 'Object Array',
  name: 'ObjectArray',
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 15,
      }}
    >
      <For each={objArray}>
        {(data, index) => <ChildDetails key={index} {...data} />}
      </For>
    </div>
  ),
};
