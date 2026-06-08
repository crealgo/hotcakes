import {Meta, StoryFn} from '@storybook/react-vite';
import {Icon} from '@hotcakes/ui-react/Icon';

export default {
    title: 'Icon'
} satisfies Meta;

export const MaterialSymbols: StoryFn = () => (
    <div style={{display: 'flex', gap: '1rem', fontSize: '1.5rem', flexWrap: 'wrap', alignItems: 'center'}}>
        <Icon icon={'home'} />
        <Icon icon={'search'} />
        <Icon icon={'close'} />
        <Icon icon={'menu'} />
        <Icon icon={'star'} />
        <Icon icon={'favorite'} />
        <Icon icon={'label'} />
        <Icon icon={'arrow_forward'} />
        <Icon icon={'open_in_new'} />
        <Icon icon={'info'} />
        <Icon icon={'check'} />
        <Icon icon={'add'} />
        <Icon icon={'person'} />
        <Icon icon={'settings'} />
    </div>
);
