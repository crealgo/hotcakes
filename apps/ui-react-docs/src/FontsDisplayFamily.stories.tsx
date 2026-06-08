import {Meta, StoryFn} from '@storybook/react-vite';
import {FontsDisplayFamily} from '@hotcakes/ui-react/FontsDisplayFamily';

export default {
    title: 'FontsDisplayFamily'
} satisfies Meta;

export const Lora: StoryFn = () => (
    <FontsDisplayFamily fontUrl={'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap'} />
);

export const NotoSans: StoryFn = () => (
    <FontsDisplayFamily fontUrl={'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap'} />
);
