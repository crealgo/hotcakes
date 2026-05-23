import {Meta, StoryFn} from '@storybook/react-vite';
import {Button} from '@hotcakes/ui-react/Button';

export default {
    title: 'Button'
} satisfies Meta;

export const Variants: StoryFn = () => (
    <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
        <Button variant={'contained'}>{'Contained'}</Button>
        <Button variant={'filled'}>{'Filled'}</Button>
        <Button variant={'outlined'}>{'Outlined'}</Button>
        <Button variant={'text'}>{'Text'}</Button>
    </div>
);

export const WithIcon: StoryFn = () => (
    <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
        <Button variant={'contained'} icon={'home'}>{'Home'}</Button>
        <Button variant={'outlined'} icon={'search'}>{'Search'}</Button>
        <Button variant={'text'} icon={'arrow_forward'}>{'Continue'}</Button>
    </div>
);

export const Colors: StoryFn = () => (
    <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
        <Button variant={'contained'} color={'brand'}>{'Brand'}</Button>
        <Button variant={'contained'} color={'blue'}>{'Blue'}</Button>
        <Button variant={'contained'} color={'green'}>{'Green'}</Button>
        <Button variant={'contained'} color={'red'}>{'Red'}</Button>
        <Button variant={'contained'} color={'orange'}>{'Orange'}</Button>
        <Button variant={'contained'} color={'purple'}>{'Purple'}</Button>
    </div>
);

export const Shapes: StoryFn = () => (
    <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
        <Button variant={'contained'} icon={'add'} shape={'circle'} />
        <Button variant={'contained'} icon={'add'} shape={'square'} />
        <Button variant={'contained'} icon={'add'} shape={'default'}>{'Default'}</Button>
    </div>
);
