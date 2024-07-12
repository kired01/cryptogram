/** @type { import ("@cspell/cspell-types").CSpellUserSettings } */
module.exports = {
	version: "0.2",
	language: "en-US",
	useGitignore: true,
	dictionaryDefinitions: [
		{
			name: "base",
			path: "../dictionaries/base.txt",
		},
		{
			name: "libs",
			path: "../dictionaries/libs.txt",
		},
	],
	dictionaries: ["base", "libs"],
	import: ["@cspell/dict-ru_ru/cspell-ext.json"],
	ignorePaths: ["**/*.svg"],
}
