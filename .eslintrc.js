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
		"no-mixed-spaces-and-tabs": [2, true],
		"react/jsx-boolean-value": [0],
		"no-unused-vars" : [ "warn" ],
		"no-console" : [ "warn" ],
		"import/no-extraneous-dependencies": [ 0 ],
		indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false
    }],
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
			"react/jsx-indent": ["error", 2],
			"react/jsx-pascal-case": [2],
			"react/jsx-uses-vars": [2],
			"jsx-a11y/href-no-hash" : [0],
			"react/prop-types" : [0],
			"jsx-a11y/no-static-element-interactions" : [0],
			"import/no-dynamic-require" : [0]
	},
	"parser": "babel-eslint"
}
