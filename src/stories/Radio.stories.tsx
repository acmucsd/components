import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../components/radio/Radio';
import { RadioGroup } from '../components/radio/RadioGroup';
import React, { useState } from 'react';

const DARK_BACKGROUND_COLOR = '#25262B';

const meta: Meta<typeof Radio> = {
  title: 'Example/Radio',
  component: Radio,
  tags: ['autodocs'],
  decorators: [
    (Story, { args }) => (
      <div style={{ backgroundColor: args.mode === 'dark' ? DARK_BACKGROUND_COLOR : undefined }}>
        <Story />
      </div>
    )
  ],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const StandaloneRadioLight: Story = {
  args: {
    name: 'standalone',
    value: 'standalone-light',
    label: 'Standalone Radio',
    mode: 'light',
  },
};

const BasicRadioGroupExample = () => (
  <RadioGroup name="basic-group" defaultValue="option1">
    <Radio value="option1" label="Option 1" />
    <Radio value="option2" label="Option 2" />
    <Radio value="option3" label="Option 3" />
  </RadioGroup>
);

export const BasicRadioGroup: Story = {
  render: BasicRadioGroupExample,
};

const ControlledRadioGroupExample = () => {
  const [value, setValue] = useState('option2');
  return (
    <div>
      <RadioGroup name="controlled-group" value={value} onChange={setValue}>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
      <p style={{ marginTop: '16px', fontSize: '14px' }}>
        Selected value: <strong>{value}</strong>
      </p>
    </div>
  );
};

export const ControlledRadioGroup: Story = {
  render: ControlledRadioGroupExample,
};

const RadioGroupHorizontalExample = () => (
  <RadioGroup name="horizontal-group" defaultValue="option2" orientation="horizontal">
    <Radio value="option1" label="Option 1" />
    <Radio value="option2" label="Option 2" />
    <Radio value="option3" label="Option 3" />
  </RadioGroup>
);

export const RadioGroupHorizontal: Story = {
  render: RadioGroupHorizontalExample,
};

const RadioGroupDisabledExample = () => (
  <RadioGroup name="disabled-group" defaultValue="option2" disabled>
    <Radio value="option1" label="Option 1" />
    <Radio value="option2" label="Option 2" />
    <Radio value="option3" label="Option 3" />
  </RadioGroup>
);

export const RadioGroupDisabled: Story = {
  render: RadioGroupDisabledExample,
};

const RadioGroupDarkExample = () => (
  <RadioGroup name="dark-group" defaultValue="option1" mode="dark">
    <Radio value="option1" label="Option 1" />
    <Radio value="option2" label="Option 2" />
    <Radio value="option3" label="Option 3" />
  </RadioGroup>
);

export const RadioGroupDark: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: DARK_BACKGROUND_COLOR }]
    },
  },
  render: RadioGroupDarkExample,
};

export const StandaloneRadioDark: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: DARK_BACKGROUND_COLOR }]
    },
  },
  args: {
    name: 'standalone-dark',
    value: 'standalone-dark',
    label: 'Standalone Radio',
    mode: 'dark',
  },
};

export const StandaloneRadioDisabled: Story = {
  args: {
    name: 'standalone-disabled',
    value: 'standalone-disabled',
    label: 'Disabled Radio',
    disabled: true,
    defaultChecked: true,
  },
};
