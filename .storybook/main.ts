import type, { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {
      // nextConfigPath:
    },
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['../public']
};
export default config;



