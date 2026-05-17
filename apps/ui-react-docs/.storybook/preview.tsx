import {Decorator, Preview} from '@storybook/react-vite';
import {ThemeProvider} from '@hotcakes/ui-react/ThemeProvider';
import {GlobalStyles} from '@hotcakes/ui-react/GlobalStyles';
import '@hotcakes/ui-react/index.css';

const ThemeDecorator: Decorator = (Story) => (
    <ThemeProvider>
        <GlobalStyles />
        <Story />
    </ThemeProvider>
);

export default {
    decorators: [ThemeDecorator]
} satisfies Preview;
