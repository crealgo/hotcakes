import {Meta, StoryFn} from '@storybook/react-vite';
import {Tag} from '@hotcakes/ui-react/Tag';

export default {
    title: 'Tag'
} satisfies Meta;

export const Colors: StoryFn = () => (
    <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
        <Tag color={'brand'}>{'Brand'}</Tag>
        <Tag color={'blue'}>{'Blue'}</Tag>
        <Tag color={'green'}>{'Green'}</Tag>
        <Tag color={'red'}>{'Red'}</Tag>
        <Tag color={'orange'}>{'Orange'}</Tag>
        <Tag color={'purple'}>{'Purple'}</Tag>
        <Tag color={'slate'}>{'Slate'}</Tag>
        <Tag color={'pink'}>{'Pink'}</Tag>
    </div>
);

export const WithIcon: StoryFn = () => (
    <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
        <Tag color={'brand'} icon={'label'}>{'Label'}</Tag>
        <Tag color={'blue'} icon={'info'}>{'Info'}</Tag>
        <Tag color={'green'} icon={'check'}>{'Done'}</Tag>
    </div>
);

export const Clickable: StoryFn = () => (
    <div style={{display: 'flex', gap: '0.5rem'}}>
        <Tag color={'brand'} isClickable>{'Clickable'}</Tag>
        <Tag color={'blue'} isClickable icon={'star'}>{'Starred'}</Tag>
    </div>
);
