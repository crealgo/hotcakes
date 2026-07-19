import type {Meta, StoryObj} from '@storybook/web-components-vite';

export default {
    title: 'Hot Button'
} satisfies Meta;

export const Primary: StoryObj = {
    render: () => /* html */`
        <hot-button>
            Hello
        </hot-button>
    `
};
