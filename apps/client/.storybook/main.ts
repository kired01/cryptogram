import type { StorybookConfig } from "@storybook/nextjs"

export default {
	stories: ["../stories/**/*.stories.(ts|tsx)"],
	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {
			builder: {
				useSWC: true,
			},
		},
	},
	docs: {
		autodocs: "tag",
	},
	staticDirs: ["../public"],
} satisfies StorybookConfig
