/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ["@turbo/eslint-config"],
	parserOptions: {
		project: true,
	},
	ignorePatterns: ["packages"],
}
