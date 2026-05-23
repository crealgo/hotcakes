import {Meta, StoryFn} from '@storybook/react-vite';
import {FontIcon} from '@hotcakes/ui-react/FontIcon';

export default {
    title: 'FontIcon'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <div style={{display: 'flex', gap: '1rem', fontSize: '1.5rem', flexWrap: 'wrap', alignItems: 'center'}}>
        <FontIcon icon={'home'} />
        <FontIcon icon={'search'} />
        <FontIcon icon={'star'} />
        <FontIcon icon={'favorite'} />
        <FontIcon icon={'settings'} />
        <FontIcon icon={'person'} />
        <FontIcon icon={'notifications'} />
        <FontIcon icon={'arrow_forward'} />
        <FontIcon icon={'label'} />
        <FontIcon icon={'check'} />
    </div>
);
