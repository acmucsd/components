import { Typography } from '../components/typography/Typography';

export default {
  title: 'Example/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const DisplayName = {
  args: {
    variant: 'displayName',
    component: 'div',
    children: 'Display Name (h1)',
  },
};

export const Display1 = {
  args: {
    variant: 'display1',
    component: 'div',
    children: 'Display 1 (h2)',
  },
};

export const Display2 = {
  args: {
    variant: 'display2',
    component: 'p',
    children: 'Display 2 (h3)',
  },
};

export const Title1 = {
  args: {
    variant: 'title1',
    component: 'p',
    children: 'Title 1 (h4)',
  },
};

export const Title2 = {
  args: {
    variant: 'title2',
    component: 'p',
    children: 'Title 2 (h5)',
  },
};

export const Title3 = {
  args: {
    variant: 'title3',
    component: 'p',
    children: 'Title 3 (h6)',
  },
};

export const BodyLarge = {
  args: {
    variant: 'bodyLarge',
    component: 'p',
    children: 'Body Large',
  },
};

export const BodyMedium = {
  args: {
    variant: 'bodyMedium',
    component: 'p',
    children: 'Body Large',
  },
};

export const BodySmall = {
  args: {
    variant: 'bodySmall',
    component: 'p',
    children: 'Body Small',
  },
};

export const CardTitle = {
  args: {
    variant: 'cardTitle',
    component: 'p',
    children: 'Card Title',
  },
};

export const CardBody = {
  args: {
    variant: 'cardTitle',
    component: 'p',
    children: 'Card Body',
  },
};

export const CardTags = {
  args: {
    variant: 'cardTags',
    component: 'p',
    children: 'Card Tags',
  },
};