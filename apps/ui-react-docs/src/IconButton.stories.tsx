import {Meta, StoryFn} from '@storybook/react-vite';
import {IconButton} from '@hotcakes/ui-react/IconButton';

export default {
    title: 'IconButton'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <div style={{display: 'flex', gap: '0.5rem'}}>
        <IconButton icon={'search'} variant={'text'} />
        <IconButton icon={'menu'} variant={'text'} />
        <IconButton icon={'close'} variant={'text'} />
        <IconButton icon={'home'} variant={'outlined'} />
        <IconButton icon={'star'} variant={'contained'} color={'brand'} />
    </div>
);

export const Contrast: StoryFn = () => (
    <div style={{backgroundColor: '#1e293b', padding: '1rem', borderRadius: '0.5rem', display: 'flex', gap: '0.5rem'}}>
        <IconButton icon={'search'} variant={'text'} contrast />
        <IconButton icon={'menu'} variant={'text'} contrast />
        <IconButton icon={'close'} variant={'text'} contrast />
    </div>
);
