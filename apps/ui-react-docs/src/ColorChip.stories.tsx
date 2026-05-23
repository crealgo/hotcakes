import {Meta, StoryFn} from '@storybook/react-vite';
import {ColorChip} from '@hotcakes/ui-react/ColorChip';

interface Args {
    colors: {
        name: string;
        hex: string;
    }[];
}

export default {
    title: 'ColorChip',
    args: {
        colors: [
            {
                name: 'Blue',
                hex: '#0000FF'
            }
        ]
    }
} satisfies Meta<Args>;

export const Primary: StoryFn<Args> = (args) => (
    <>
        {args.colors.map((chip) => (
            <ColorChip {...chip}>{'content'}</ColorChip>
        ))}
    </>
);
