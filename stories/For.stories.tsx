import { Meta, StoryObj } from '@storybook/react';
import { For } from '../src';
import * as React from 'react';
import { ChildName, ChildDetails } from '../example/Child';

/** This is component is used to simplify the control flow of 
 * mapping through arrays and making the code more readable 
 * and modular 
 * */
const meta: Meta<typeof For> = {
  title: 'React Solid Components/For',
  component: For,
};

export default meta;

type Story = StoryObj<typeof meta>;

// An array of strings
const strArray = ['Shahida', 'A-Rahman', 'Shareef', 'Ashraf', 'Marriam'];

/**  Looping through an array of strings */
export const First: Story = {
  name: 'StringArray',
  render: () => (
    <div>
      <For each={strArray}>
        {(name, index) => <ChildName key={index} name={name} index={index} />}
      </For>
    </div>
  ),
};

// An array of objects
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

/**  Looping through an array of objects */
export const Second: Story = {
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
