import {Meta, StoryFn} from '@storybook/react-vite';
import {LightBox} from '@hotcakes/ui-react/LightBox';

export default {
    title: 'LightBox'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <div style={{position: 'relative', height: '600px', overflow: 'hidden'}}>
        <LightBox />
    </div>
);
