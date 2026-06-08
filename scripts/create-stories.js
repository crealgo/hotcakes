import fs from 'node:fs/promises';
import path from 'node:path';

const components = [
    'Block', 'Button', 'ButtonLink', 'ColorChip',
    'ColorPalette', 'Container', 'Content', 'Divider',
    'Dot', 'FilterBoxInput', 'FilterRadio', 'FilterRadioGroup',
    'FontDisplaySection', 'FontGlyphBox', 'FontGlyphBoxWrapper',
    'FontIcon', 'FontsDisplayFamily', 'Footer', 'Header',
    'HeaderDrawer', 'HeaderSearch', 'HelperText', 'HeroBlock',
    'Icon', 'IconButton', 'IconButtonLink', 'Image',
    'KeyboardSnippet', 'LightBox', 'Link', 'LinkLarge', 'LoadingDots',
    'MainContent', 'Mark', 'Masonry', 'MasonryItem', 'MDXContent',
    'PageHeader', 'ProjectCard', 'ProjectTitleBlock',
    'ScrollableGallery', 'SkipLink', 'Stack', 'StyledComponentsRegistry',
    'SubtitleBox', 'SvgIcon', 'Tag', 'Text', 'ThemeProvider',
    'TitleBox', 'Typography'
];

function getContent(componentName = '') {
    if (componentName === '') {
        throw new Error('No component name');
    }

    return `import { Meta, StoryFn } from '@storybook/react-vite';
import { ${componentName} } from '@hotcakes/ui-react/${componentName}';

export default {
    title: '${componentName}'
} satisfies Meta;

export const Primary: StoryFn = (args) => (
    <${componentName} {...args}>{'content'}</${componentName}>
);
`;
};

for await (const component of components) {
    const content = getContent(component);
    const filePath = path.join('apps', 'ui-react-docs', 'src', `${component}.stories.tsx`);

    await fs.writeFile(filePath, content, 'utf-8');
}
