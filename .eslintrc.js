module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    'extends': [
        'google',
        "prettier",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    'rules': {
        'linebreak-style': ['off', 'windows'],
        'indent': [0, 4],
        'max-len': ['error', { code: 180 }],
        'require-jsdoc': 0,
        'quotes': [0, 'single', { 'avoidEscape': true }],
        'object-curly-spacing': ["error", "always"],
    },
}
