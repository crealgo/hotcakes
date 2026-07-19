import {defineMain} from '@storybook/web-components-vite/node';
import '@hotcakes/ui-web-components';

export default defineMain({
    stories: ['../src/*.stories.ts'],
    framework: '@storybook/web-components-vite' // 👈 Add this
});
