import { Button } from "@nextui-org/button"
import type { Meta, StoryObj } from "@storybook/react"

export default {
	title: "Example/Button",
	component: Button,
	args: {
		children: "Button",
		color: "primary",
	},
	argTypes: {
		color: {
			options: ["primary", "secondary", "success", "warning", "error"],
			control: {
				type: "select",
			},
		},
		children: {
			name: "title",
		},
	},
} satisfies Meta<typeof Button>

export const Default = {} satisfies StoryObj<typeof Button>
