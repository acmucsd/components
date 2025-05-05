import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/checkbox/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Example/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  // Show changes in the "Actions" panel
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Below are a few example stories. You can add more to show 
// hover, focus, or pressed states by using pseudo-states 
// or custom decorators.

export const EnabledUnselectedLight: Story = {
  args: {
    checked: false,
    disabled: false,
    mode: 'light',
    label: 'Label',
  },
};

export const EnabledSelectedLight: Story = {
  args: {
    checked: true,
    disabled: false,
    mode: 'light',
    label: 'Label',
  },
};

export const DisabledUnselectedLight: Story = {
  args: {
    checked: false,
    disabled: true,
    mode: 'light',
    label: 'Label',
  },
};

export const DisabledSelectedLight: Story = {
  args: {
    checked: true,
    disabled: true,
    mode: 'light',
    label: 'Label',
  },
};

export const EnabledUnselectedDark: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#25262B' }
      ]
    },
  },
  args: {
    checked: false,
    disabled: false,
    mode: 'dark',
    label: 'Label',
  },
};

export const EnabledSelectedDark: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#25262B' }
      ]
    },
  },
  args: {
    checked: true,
    disabled: false,
    mode: 'dark',
    label: 'Label',
  },
};

export const DisabledUnselectedDark: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#25262B' }
      ]
    },
  },
  args: {
    checked: false,
    disabled: true,
    mode: 'dark',
    label: 'Label',
  },
};

export const DisabledSelectedDark: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#25262B' }
      ]
    },
  },
  args: {
    checked: true,
    disabled: true,
    mode: 'dark',
    label: 'Label',
  },
};
