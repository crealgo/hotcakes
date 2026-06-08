import {Meta, StoryFn} from '@storybook/react-vite';
import {Block} from '@hotcakes/ui-react/Block';
import {Typography} from '@hotcakes/ui-react/Typography';

export default {
    title: 'Block'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <Block>
        <Typography variant={'body1'}>{'Block with responsive horizontal padding'}</Typography>
    </Block>
);

export const Colors: StoryFn = () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>
        <Block color={'brand'}><Typography variant={'body2'}>{'Brand'}</Typography></Block>
        <Block color={'blue'}><Typography variant={'body2'}>{'Blue'}</Typography></Block>
        <Block color={'green'}><Typography variant={'body2'}>{'Green'}</Typography></Block>
        <Block color={'orange'}><Typography variant={'body2'}>{'Orange'}</Typography></Block>
        <Block color={'slate'}><Typography variant={'body2'}>{'Slate'}</Typography></Block>
    </div>
);
