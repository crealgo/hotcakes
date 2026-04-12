import type { Meta, StoryObj } from "@storybook/web-components-vite";

export default {
    render: () => /* html */ `
        <div class="kitchen-sink">
            <div>
                <button type="button">Basic Link</button>
                <details>
                    <summary class="parent-trigger">Parent</summary>
                    <div class="parent-popover">
                        <details>
                            <summary class="child-trigger" class="child-button">Child</summary>
                            <div class="child-popover">
                                <button type="button">Child Link</button>
                                <button type="button">Child Link</button>
                                <button type="button">Child Link</button>
                            </div>
                        </details>

                        <button class="child-button" type="button">Parent Link</button>
                        <button class="child-button" type="button">Parent Link</button>
                        <button class="child-button" type="button">Parent Link</button>
                    </div>
                </details>
            </div>
        </div>
    `,
} satisfies Meta;

export const Primary: StoryObj = {};
