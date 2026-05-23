import {Meta, StoryFn} from '@storybook/react-vite';
import {ScrollableGallery} from '@hotcakes/ui-react/ScrollableGallery';
import {Image} from '@hotcakes/ui-react/Image';

export default {
    title: 'ScrollableGallery'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <ScrollableGallery>
        {[41, 42, 43, 44, 45].map((i) => (
            <Image
                key={i}
                src={`https://picsum.photos/800/600?random=${i}`}
                alt={`Gallery image ${i - 40}`}
                height={'30rem'}
            />
        ))}
    </ScrollableGallery>
);
