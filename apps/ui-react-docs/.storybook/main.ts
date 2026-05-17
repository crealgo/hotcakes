import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    framework: '@storybook/react-vite',
    stories: ['../src/**/*.@(story|stories).tsx'],
    addons: ['@storybook/addon-vitest'],
    viteFinal: (config) => ({
        ...config,
        optimizeDeps: {
            ...config.optimizeDeps,
            include: [
                ...(config.optimizeDeps?.include ?? []),
                'react',
                'react-dom'
            ]
        }
    })
};

export default config;
