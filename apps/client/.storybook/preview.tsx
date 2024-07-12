import { NextUIProvider } from "@nextui-org/system"
import { cn } from "@nextui-org/theme"
import type { Preview } from "@storybook/react"

import { fontSans } from "@/app/fonts"
import "@/app/styles/index.css"

export default {
	parameters: {
		controls: {
			matchers: {
				date: /Date$/i,
				color: /(background|color)$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<NextUIProvider>
				<div className={cn("font-sans antialiased", fontSans.variable)}>
					<Story />
				</div>
			</NextUIProvider>
		),
	],
} satisfies Preview
