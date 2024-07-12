/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: [
		"next",
		require.resolve("@vercel/style-guide/eslint/next"),
		"@turbo/eslint-config",
		"plugin:storybook/recommended",
		"plugin:@tanstack/eslint-plugin-query/recommended",
	],
	plugins: ["@tanstack/query"],
	parserOptions: {
		project: true,
	},
}
