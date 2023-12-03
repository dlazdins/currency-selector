module.exports = {
	preset: "@vue/cli-plugin-unit-jest/presets/typescript",
	transform: {
		"^.+\\.vue$": "@vue/vue2-jest",
		"^.+\\.ts?$": "ts-jest",
	},
};
