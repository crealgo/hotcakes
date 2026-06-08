import {Meta, StoryFn} from '@storybook/react-vite';
import {Masonry} from '@hotcakes/ui-react/Masonry';
import {MasonryItem} from '@hotcakes/ui-react/MasonryItem';
import {Image} from '@hotcakes/ui-react/Image';

export default {
    title: 'Masonry'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <Masonry>
        <MasonryItem>
            <Image src={'https://picsum.photos/400/600?random=21'} alt={'Item 1'} width={'100%'} />
        </MasonryItem>
        <MasonryItem orientation={'horizontal'}>
            <Image src={'https://picsum.photos/800/400?random=22'} alt={'Item 2'} width={'100%'} />
        </MasonryItem>
        <MasonryItem>
            <Image src={'https://picsum.photos/400/600?random=23'} alt={'Item 3'} width={'100%'} />
        </MasonryItem>
        <MasonryItem>
            <Image src={'https://picsum.photos/400/600?random=24'} alt={'Item 4'} width={'100%'} />
        </MasonryItem>
        <MasonryItem orientation={'horizontal'}>
            <Image src={'https://picsum.photos/800/400?random=25'} alt={'Item 5'} width={'100%'} />
        </MasonryItem>
        <MasonryItem>
            <Image src={'https://picsum.photos/400/600?random=26'} alt={'Item 6'} width={'100%'} />
        </MasonryItem>
    </Masonry>
);
