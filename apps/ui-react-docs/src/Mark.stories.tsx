import {Meta, StoryFn} from '@storybook/react-vite';
import {Mark} from '@hotcakes/ui-react/Mark';

export default {
    title: 'Mark'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <p>
        {'This is a paragraph with a '}<Mark>{'highlighted phrase'}</Mark>{' in the middle.'}
    </p>
);

export const Colors: StoryFn = () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
        <p><Mark color={'brand'}>{'Brand highlight'}</Mark></p>
        <p><Mark color={'blue'}>{'Blue highlight'}</Mark></p>
        <p><Mark color={'green'}>{'Green highlight'}</Mark></p>
        <p><Mark color={'red'}>{'Red highlight'}</Mark></p>
        <p><Mark color={'yellow'}>{'Yellow highlight'}</Mark></p>
        <p><Mark noBackground>{'No background'}</Mark></p>
    </div>
);
