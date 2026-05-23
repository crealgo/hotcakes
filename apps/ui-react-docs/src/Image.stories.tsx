import {Meta, StoryFn} from '@storybook/react-vite';
import {Image} from '@hotcakes/ui-react/Image';

export default {
    title: 'Image'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <div style={{width: '320px'}}>
        <Image
            src={'https://picsum.photos/640/480?random=1'}
            alt={'Sample image'}
            aspectRatio={'4/3'}
            width={'100%'}
        />
    </div>
);

export const LoadingTransitions: StoryFn = () => (
    <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
        <div style={{width: '200px'}}>
            <Image
                src={'https://picsum.photos/400/400?random=2'}
                alt={'Fade transition'}
                aspectRatio={'1/1'}
                width={'100%'}
                loadingTransition={'fade'}
            />
        </div>
        <div style={{width: '200px'}}>
            <Image
                src={'https://picsum.photos/400/400?random=3'}
                alt={'Translate transition'}
                aspectRatio={'1/1'}
                width={'100%'}
                loadingTransition={'translate'}
            />
        </div>
    </div>
);

export const ObjectFit: StoryFn = () => (
    <div style={{display: 'flex', gap: '1rem'}}>
        <div style={{width: '200px'}}>
            <Image
                src={'https://picsum.photos/400/600?random=4'}
                alt={'Cover'}
                aspectRatio={'1/1'}
                width={'100%'}
                objectFit={'cover'}
            />
        </div>
        <div style={{width: '200px'}}>
            <Image
                src={'https://picsum.photos/400/600?random=4'}
                alt={'Contain'}
                aspectRatio={'1/1'}
                width={'100%'}
                objectFit={'contain'}
            />
        </div>
    </div>
);
