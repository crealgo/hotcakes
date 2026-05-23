import {Meta, StoryFn} from '@storybook/react-vite';
import {LinkLarge} from '@hotcakes/ui-react/LinkLarge';

export default {
    title: 'LinkLarge'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <LinkLarge href={'#'}>{'Design Systems'}</LinkLarge>
        <LinkLarge href={'#'}>{'Typography'}</LinkLarge>
        <LinkLarge href={'#'}>{'Color Theory'}</LinkLarge>
    </div>
);
