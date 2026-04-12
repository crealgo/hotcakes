import type { Meta, StoryObj } from "@storybook/web-components-vite";

export default {
    render: () => /* html */ `
        <hot-button>
            <a slot="root" href="link">Basic Link</a>
        </hot-button>
        <hot-button>
            <a slot="root" href="link">Basic Link</a>
        </hot-button>
    `,
} satisfies Meta;

export const Primary: StoryObj = {};
