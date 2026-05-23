import {Meta, StoryFn} from '@storybook/react-vite';
import {Stack} from '@hotcakes/ui-react/Stack';
import {Tag} from '@hotcakes/ui-react/Tag';

export default {
    title: 'Stack'
} satisfies Meta;

export const Horizontal: StoryFn = () => (
    <Stack>
        <Tag color={'brand'}>{'Tag A'}</Tag>
        <Tag color={'blue'}>{'Tag B'}</Tag>
        <Tag color={'green'}>{'Tag C'}</Tag>
        <Tag color={'orange'}>{'Tag D'}</Tag>
    </Stack>
);

export const Vertical: StoryFn = () => (
    <Stack vertical gap={0.5}>
        <Tag color={'brand'}>{'Tag A'}</Tag>
        <Tag color={'blue'}>{'Tag B'}</Tag>
        <Tag color={'green'}>{'Tag C'}</Tag>
    </Stack>
);
