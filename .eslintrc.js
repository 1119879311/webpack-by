const OFF = 0;
const WARN = 1;
const ERROR = 2;
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb/hooks',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.tsx', '.ts', '.js', '.json'],
            },
        },
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'jsx-quotes': [ERROR, 'prefer-single'],
        'no-unused-vars': OFF,
        'no-console': OFF,
        'no-unused-expressions': OFF,
        'prettier/prettier': [
            'warn',
            {
                singleQuote: true,
            },
        ],
        'import/extensions': [
            ERROR,
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
                json: 'never',
                js: 'never',
            },
        ],
    },
};
