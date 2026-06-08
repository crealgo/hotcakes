import {Meta, StoryFn} from '@storybook/react-vite';
import {ColorPalette} from '@hotcakes/ui-react/ColorPalette';

interface Args {
    colors: {name: string; hex: string}[];
}

export default {
    title: 'ColorPalette',
    args: {
        colors: [
            {name: 'Brand', hex: '#6366f1'},
            {name: 'Blue', hex: '#3b82f6'},
            {name: 'Green', hex: '#22c55e'},
            {name: 'Red', hex: '#ef4444'},
            {name: 'Orange', hex: '#f97316'},
            {name: 'Yellow', hex: '#eab308'},
            {name: 'Purple', hex: '#a855f7'},
            {name: 'Slate', hex: '#64748b'}
        ]
    }
} satisfies Meta<Args>;

export const Primary: StoryFn<Args> = (args) => <ColorPalette {...args} />;
