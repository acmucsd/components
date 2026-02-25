import { fn } from '@storybook/test';

import { Input } from '../components/inputs-dropdowns/Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    suggestions: {
      control: { type: 'object' },
      description: 'Autocomplete suggestions',
      defaultValue: ['abacus', 'boy', 'car'],
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onValueChange: fn(),
    suggestions: ['acm', 'ai', 'hack', 'design', 'alex zheng'], },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    theme: 'light', // Define theme prop
    variant: 'primary',
    inputSize: 'desktop',
  },
    
};

export const Dark = {
  args: {
    theme: 'dark',
    variant: 'primary',
    inputSize: 'desktop'
  }
}

export const Danger = {
  args: {
    theme: 'light',
    variant: 'error',
    inputSize: 'desktop'
  }
}
