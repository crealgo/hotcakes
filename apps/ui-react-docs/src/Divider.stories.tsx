import {Meta, StoryFn} from '@storybook/react-vite';
import {Divider} from '@hotcakes/ui-react/Divider';
import {Typography} from '@hotcakes/ui-react/Typography';

export default {
    title: 'Divider'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <div>
        <Typography variant={'body1'}>{'Content above'}</Typography>
        <Divider />
        <Typography variant={'body1'}>{'Content below'}</Typography>
    </div>
);

export const CustomSpacing: StoryFn = () => (
    <div>
        <Typography variant={'body1'}>{'Above'}</Typography>
        <Divider spacing={[1, 1]} />
        <Typography variant={'body1'}>{'Tight spacing'}</Typography>
        <Divider spacing={[4, 2]} />
        <Typography variant={'body1'}>{'Wide spacing'}</Typography>
    </div>
);
