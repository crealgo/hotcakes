import {Meta, StoryFn} from '@storybook/react-vite';
import {Content} from '@hotcakes/ui-react/Content';
import {Typography} from '@hotcakes/ui-react/Typography';

export default {
    title: 'Content'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <Content>
        <Typography variant={'h2'}>{'Section Heading'}</Typography>
        <Typography variant={'body1'}>{'First paragraph stacked vertically with consistent gap.'}</Typography>
        <Typography variant={'body1'}>{'Second paragraph stacked vertically with consistent gap.'}</Typography>
    </Content>
);

export const CustomSpacing: StoryFn = () => (
    <Content spacing={2}>
        <Typography variant={'h2'}>{'Wide Spacing'}</Typography>
        <Typography variant={'body1'}>{'Content items spaced farther apart.'}</Typography>
        <Typography variant={'body1'}>{'Another item with wider gap.'}</Typography>
    </Content>
);
