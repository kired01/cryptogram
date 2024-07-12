const basePrettierConfig = require("@turbo/prettier-config")

/** @type {import("prettier").Config} */
module.exports = {
	...basePrettierConfig,
	tailwindFunctions: ["clsx"],
	tailwindConfig: "./tailwind.config.ts",
	plugins: [
		require.resolve("@trivago/prettier-plugin-sort-imports"),
		require.resolve("prettier-plugin-tailwindcss"),
	],
	importOrder: [
		"^@/app/(.*)$",
		"^@/views/(.*)$",
		"^@/widgets/(.*)$",
		"^@/features/(.*)$",
		"^@/entities/(.*)$",
		"^@/shared/(.*)$",
		"^[./]",
		"^public/(.*)$",
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
}
