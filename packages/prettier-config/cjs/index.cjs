/** @type {import("prettier").Config} */
module.exports = {
	semi: false,
	useTabs: true,
	printWidth: 100,
	bracketSameLine: true,
	experimentalTernaries: true,
	singleAttributePerLine: true,
	overrides: [
		{
			files: ["*.(js|cjs|mjs|ts|tsx)"],
			options: {
				parser: "typescript",
			},
		},
		{
			files: "*.(yml|yaml)",
			options: {
				parser: "yaml",
			},
		},
		{
			files: "*.md",
			options: {
				parser: "markdown",
			},
		},
		{
			files: "*.json",
			options: {
				parser: "json-stringify",
			},
		},
	],
}
