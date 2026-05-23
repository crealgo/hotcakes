import {Meta, StoryFn} from '@storybook/react-vite';
import {Typography} from '@hotcakes/ui-react/Typography';

export default {
    title: 'Typography'
} satisfies Meta;

export const Variants: StoryFn = () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <Typography variant={'display1'}>{'Display 1'}</Typography>
        <Typography variant={'display2'}>{'Display 2'}</Typography>
        <Typography variant={'display3'}>{'Display 3'}</Typography>
        <Typography variant={'h1'}>{'Heading 1'}</Typography>
        <Typography variant={'h2'}>{'Heading 2'}</Typography>
        <Typography variant={'h3'}>{'Heading 3'}</Typography>
        <Typography variant={'body1'}>{'Body 1 — The quick brown fox jumps over the lazy dog.'}</Typography>
        <Typography variant={'body2'}>{'Body 2 — The quick brown fox jumps over the lazy dog.'}</Typography>
        <Typography variant={'caption'}>{'Caption — Small descriptive text'}</Typography>
    </div>
);
