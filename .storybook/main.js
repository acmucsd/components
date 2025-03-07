/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    "../src/app/stories/**/*.mdx",
    "../src/app/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
};
export default config;
