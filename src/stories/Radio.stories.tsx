import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../components/radio/Radio';
import React from 'react';

const DARK_BACKGROUND_COLOR = '#25262B';

const meta: Meta<typeof Radio> = {
  title: 'Example/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
  args: {
    name: 'example',
    value: 'example',
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const MultipleRadioButtons: Story = {
  args: {
    disabled: false,
    mode: 'light',
    label: 'Label',
    defaultChecked: false,
  },
  decorators: [
    (Story, { args }) => (
      <div style={{ backgroundColor: args.mode === 'dark' ? DARK_BACKGROUND_COLOR : undefined }}>
        <Story args={{ ...args, value: args.value + '1' }} /> <br />
        <Story args={{ ...args, value: args.value + '2' }} /> <br />
        <Story args={{ ...args, value: args.value + '3' }} />
      </div>
    )
  ],
};

export const EnabledUnselectedLight: Story = {
  args: {
    defaultChecked: false,
    disabled: false,
    mode: 'light',
    label: 'Label',
  },
};

export const EnabledSelectedLight: Story = {
  args: {
    defaultChecked: true,
    disabled: false,
    mode: 'light',
    label: 'Label',
  },
};

export const DisabledUnselectedLight: Story = {
  args: {
    defaultChecked: false,
    disabled: true,
    mode: 'light',
    label: 'Label',
  },
};

export const DisabledSelectedLight: Story = {
  args: {
    defaultChecked: true,
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
        { name: 'dark', value: DARK_BACKGROUND_COLOR }
      ]
    },
  },
  args: {
    defaultChecked: false,
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
        { name: 'dark', value: DARK_BACKGROUND_COLOR }
      ]
    },
  },
  args: {
    defaultChecked: true,
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
        { name: 'dark', value: DARK_BACKGROUND_COLOR }
      ]
    },
  },
  args: {
    defaultChecked: false,
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
        { name: 'dark', value: DARK_BACKGROUND_COLOR }
      ]
    },
  },
  args: {
    defaultChecked: true,
    disabled: true,
    mode: 'dark',
    label: 'Label',
  },
};
