import type { Meta, StoryObj } from "@storybook/web-components-vite";

export default {
    render: () => /* html */ `
        <hot-nav>
            <hot-button>
                <a href="link" slot="root">Basic Link</a>
            </hot-button>
            <hot-button>
                <a href="link" slot="root">Basic Link</a>
            </hot-button>
            <hot-dropdown>
                <hot-button slot="control">
                    <button slot="root" type="button" >Custom Link Text</button>
                </hot-button>
                <div slot="content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </hot-dropdown>
        </hot-nav>
    `,
} satisfies Meta;

export const Primary: StoryObj = {};
