import {Meta, StoryFn} from '@storybook/react-vite';
import {SubtitleBox} from '@hotcakes/ui-react/SubtitleBox';

export default {
    title: 'SubtitleBox'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <SubtitleBox
        title={'Typography'}
        description={'The typeface system uses Lora for headings and body text, providing a warm, readable aesthetic suited to editorial content.'}
        helperText={<span style={{fontSize: '0.75rem', color: '#94a3b8'}}>{'Last updated January 2024'}</span>}
    />
);

export const Minimal: StoryFn = () => (
    <SubtitleBox title={'Color Palette'} />
);
