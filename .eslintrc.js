module.exports = {
	"env": {
			"browser": true,
			"es6": true,
			"node": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
			"ecmaFeatures": {
					"experimentalObjectRestSpread": true,
					"jsx": true
			},
			"sourceType": "module"
	},
	"plugins": [
			"react"
	],
	"rules": {
		"react/jsx-boolean-value": [0],
		"no-unused-vars" : [ "warn" ],
		"no-console" : [ "warn" ],
		"import/no-extraneous-dependencies": [ 0 ],
			"indent": [
					"error",
					2
			],
			"linebreak-style": [
					"error",
					"unix"
			],
			"quotes": [
					"error",
					"single"
			],
			"jsx-quotes": [
				"error",
				"prefer-double"
			],
			"semi": [
					"error",
					"always"
			],
			"keyword-spacing": [ "warn" ],
			"arrow-spacing": [ "warn" ],
			"comma-spacing": [ "warn" ],
			"semi-spacing": [ "warn" ],
			"object-curly-spacing": [
				"warn", 
				"always"
			],
			"space-infix-ops": [
				"warn"
			],
			"space-before-function-paren": [
				"warn", 
				{
					"anonymous": "never",
					"named": "never",
					"asyncArrow": "always"
				}
			],
			"react/jsx-curly-spacing": [
				1,
				{
					"when": "always",
					"objectLiterals": "never"
				}
			],
			"react/jsx-indent": [
				2,
				2
			],
			"react/jsx-pascal-case": [2],
			"react/jsx-uses-vars": [2],
			"jsx-a11y/href-no-hash" : [0],
			"react/prop-types" : [0],
			"jsx-a11y/no-static-element-interactions" : [0],
			"import/no-dynamic-require" : [0]
	},
	"parser": "babel-eslint"
}
