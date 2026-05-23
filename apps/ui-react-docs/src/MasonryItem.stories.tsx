import {Meta, StoryFn} from '@storybook/react-vite';
import {Masonry} from '@hotcakes/ui-react/Masonry';
import {MasonryItem} from '@hotcakes/ui-react/MasonryItem';
import {Image} from '@hotcakes/ui-react/Image';

export default {
    title: 'MasonryItem'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <Masonry>
        <MasonryItem>
            <Image src={'https://picsum.photos/400/600?random=31'} alt={'Vertical item'} width={'100%'} />
        </MasonryItem>
        <MasonryItem orientation={'horizontal'}>
            <Image src={'https://picsum.photos/800/400?random=32'} alt={'Horizontal item'} width={'100%'} />
        </MasonryItem>
        <MasonryItem>
            <Image src={'https://picsum.photos/400/600?random=33'} alt={'Vertical item'} width={'100%'} />
        </MasonryItem>
    </Masonry>
);
