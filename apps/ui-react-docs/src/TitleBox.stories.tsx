import {Meta, StoryFn} from '@storybook/react-vite';
import {TitleBox} from '@hotcakes/ui-react/TitleBox';

export default {
    title: 'TitleBox'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <TitleBox
        title={'Design Systems'}
        subtitle={'Building consistent UI at scale'}
        description={'A comprehensive guide to creating and maintaining design systems for modern web applications.'}
    />
);

export const WithChildren: StoryFn = () => (
    <TitleBox
        title={'Project Overview'}
        subtitle={'Brand identity and UI design'}
        description={'Custom design system built for a SaaS product.'}
    >
        <p>{'Additional content can be placed here as children.'}</p>
    </TitleBox>
);
