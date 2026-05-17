import { Decorator, Preview } from '@storybook/react-vite';
import { ThemeProvider } from '@hotcakes/ui-react/ThemeProvider';

const ThemeDecorator: Decorator = (Story) => (
    <ThemeProvider>
        <Story />
    </ThemeProvider>
);

export default {
    decorators: [ThemeDecorator]
} satisfies Preview;
