import {Meta, StoryFn} from '@storybook/react-vite';
import {KeyboardSnippet} from '@hotcakes/ui-react/KeyboardSnippet';

export default {
    title: 'KeyboardSnippet'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
        <KeyboardSnippet keys={['Ctrl', '/']} />
        <KeyboardSnippet keys={['Cmd', 'K']} />
        <KeyboardSnippet keys={['Escape']} />
    </div>
);

export const Accent: StoryFn = () => (
    <div style={{backgroundColor: '#1e293b', padding: '1rem', borderRadius: '0.5rem', display: 'flex', gap: '0.75rem'}}>
        <KeyboardSnippet keys={['Ctrl', '/']} accent />
        <KeyboardSnippet keys={['Escape']} accent />
    </div>
);
