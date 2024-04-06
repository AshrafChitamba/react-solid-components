import { Meta, StoryObj } from '@storybook/react';
import SwitchExample from '../example/SwitchExample';

/** This is component is used control conditional
 * rendering in a form of if-else-if-else...chain
 * making it more readable and modular */
const meta: Meta<typeof SwitchExample> = {
  title: 'React Solid Components/Switch',
  component: SwitchExample,
  args: {
    name: 'Shahida',
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = { args: {} };
