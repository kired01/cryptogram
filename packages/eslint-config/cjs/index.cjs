const { resolve } = require("node:path")

const project = resolve(process.cwd(), "tsconfig.json")

/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: ["eslint:recommended", "prettier", "turbo", "plugin:@typescript-eslint/recommended"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 14,
		sourceType: "module",
	},
	plugins: ["only-warn"],
	globals: {
		React: true,
		JSX: true,
	},
	settings: {
		"import/resolver": {
			typescript: {
				project,
			},
		},
	},
	env: {
		es6: true,
		node: true,
	},
	ignorePatterns: ["node_modules", ".yarn"],
	overrides: [
		{
			files: ["*.(js|cjs|mjs|ts|tsx)"],
		},
	],
	rules: {
		"turbo/no-undeclared-env-vars": "off",
	},
}
