import {Meta, StoryFn} from '@storybook/react-vite';
import {ProjectTitleBlock} from '@hotcakes/ui-react/ProjectTitleBlock';

export default {
    title: 'ProjectTitleBlock'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <ProjectTitleBlock {...args}>{'content'}</ProjectTitleBlock>
);
