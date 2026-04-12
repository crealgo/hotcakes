import {type Meta, type StoryObj} from '@storybook/react';
import {Banner, type BannerProps} from './Banner';

export default {
	component: Banner,
} satisfies Meta;

export const Default: StoryObj<BannerProps> = {
	args: {
		children: '⚡️⚡️ It\'s sash season!! Don\'t wait too long, spots are filling up fast!',
	},
};
