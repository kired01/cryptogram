import { nextui } from "@nextui-org/theme"
import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

import { getComponentsPath } from "./src/shared/lib"

const nextuiComponents = ["button", "skeleton", "spinner", "link", "spacer", "scroll-shadow"]

const nextuiComponentsPath = getComponentsPath(
	"@nextui-org/theme",
	"64a0fdf025",
	"dist/components",
	nextuiComponents,
)

export default {
	darkMode: "class",
	content: ["./src/**/*.(ts|tsx)", nextuiComponentsPath],
	theme: {
		container: {
			center: true,
			padding: "1rem",
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			fontSize: {
				sm: ["0.875rem", "1.25rem"],
				base: ["1rem", "1.5rem"],
				xl: ["1.25rem", "1.75rem"],
				"4xl": ["2.25rem", "2.5rem"],
			},
			borderRadius: {
				sm: "0.125rem",
				"2xl": "1rem",
			},
			colors: {
				white: {
					DEFAULT: "var(--white)",
				},
				brown: {
					DEFAULT: "var(--brown)",
					300: "var(--brown-300)",
				},
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".grid-container": {
					display: "grid",
					"row-gap": "5px",
					"column-gap": "3px",
					"grid-template-columns": "repeat(12,1fr)",
				},
			})
		}),
		nextui({
			layout: {},
			themes: {
				light: {
					colors: {
						default: {
							DEFAULT: "#D0C0C3",
							foreground: "#73384A",
						},
						primary: {
							DEFAULT: "#17C964",
							foreground: "#FFFFFF",
						},
						secondary: {
							DEFAULT: "#FFFFFF",
							foreground: "#67496d",
						},
						background: "#F7F1EF",
						foreground: "#73384A",
					},
				},
			},
		}),
	],
} satisfies Config
