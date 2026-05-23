import type {StorybookConfig} from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
    framework: '@storybook/react-vite',
    stories: ['../src/**/*.@(story|stories).tsx'],
    addons: ['@storybook/addon-vitest'],
    viteFinal: (config) => ({
        ...config,
        plugins: [
            ...config.plugins ?? [],
            tailwindcss()
        ],
        resolve: {
            ...config.resolve,
            alias: {
                ...(typeof config.resolve?.alias === 'object' && !Array.isArray(config.resolve.alias) ? config.resolve.alias : {}),
                'next/navigation': path.resolve(__dirname, './mocks/next-navigation.ts'),
                'next/navigation.js': path.resolve(__dirname, './mocks/next-navigation.ts')
            }
        },
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
