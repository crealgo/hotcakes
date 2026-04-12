import type { Meta, StoryObj } from "@storybook/web-components-vite";

export default {
    render: () => /* html */ `
        <hot-dropdown>
            <hot-button slot="control">
                <button slot="root" type="button" >Custom Link Text</button>
            </hot-button>
            <div slot="content">
                <hot-button>
                    <button slot="root" type="button" >Custom Link Text</button>
                </hot-button>
                <hot-button>
                    <button slot="root" type="button" >Custom Link Text</button>
                </hot-button>
                <hot-button>
                    <button slot="root" type="button" >Custom Link Text</button>
                </hot-button>
                <hot-button>
                    <button slot="root" type="button" >Custom Link Text</button>
                </hot-button>
                <hot-button>
                    <button slot="root" type="button" >Custom Link Text</button>
                </hot-button>
            </div>
        </hot-dropdown>
    `,
} satisfies Meta;

export const Primary: StoryObj = {};
