import {Decorator, Preview} from '@storybook/react-vite';
import {ThemeProvider} from '@hotcakes/ui-react/ThemeProvider';

import '@fontsource-variable/arimo';
import '@fontsource-variable/fraunces';
import '@fontsource-variable/jetbrains-mono';
import '@fontsource-variable/material-symbols-outlined';
import '@fontsource-variable/material-symbols-sharp';

import '@hotcakes/ui-react/index.css';

const ThemeDecorator: Decorator = (Story) => (
    <ThemeProvider>
        <Story />
    </ThemeProvider>
);

export default {
    decorators: [ThemeDecorator]
} satisfies Preview;
