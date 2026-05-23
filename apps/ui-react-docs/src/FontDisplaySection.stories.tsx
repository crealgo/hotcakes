import {Meta, StoryFn} from '@storybook/react-vite';
import {FontDisplaySection} from '@hotcakes/ui-react/FontDisplaySection';

export default {
    title: 'FontDisplaySection'
} satisfies Meta;

export const Snippet: StoryFn = () => (
    <FontDisplaySection area={'snippet'} title={'Text Sample'} helperText={'Try editing the text below'}>
        <p style={{fontFamily: 'serif', fontSize: '2rem'}}>{'The quick brown fox'}</p>
    </FontDisplaySection>
);

export const Glyph: StoryFn = () => (
    <FontDisplaySection area={'glyph'} title={'Selected Glyph'}>
        <p style={{fontFamily: 'serif', fontSize: '8rem', textAlign: 'center', margin: 0}}>{'A'}</p>
    </FontDisplaySection>
);

export const Characters: StoryFn = () => (
    <FontDisplaySection area={'characters'} title={'Character Set'} helperText={'Click a character to preview it'}>
        <p style={{fontFamily: 'serif', fontSize: '1rem', letterSpacing: '0.25rem'}}>
            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789'}
        </p>
    </FontDisplaySection>
);
