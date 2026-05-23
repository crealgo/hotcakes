import {Meta, StoryFn} from '@storybook/react-vite';
import {Text} from '@hotcakes/ui-react/Text';

export default {
    title: 'Text'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
        <Text>{'Plain text content'}</Text>
        <Text icon={'info'}>{'Text with an info icon'}</Text>
        <Text icon={'home'}>{'Text with a home icon'}</Text>
        <Text icon={'star'}>{'Text with a star icon'}</Text>
    </div>
);
