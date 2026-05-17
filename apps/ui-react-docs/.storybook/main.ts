import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    framework: '@storybook/react-vite',
    stories: ['../src/**/*.@(story|stories).tsx']
};

export default config;
