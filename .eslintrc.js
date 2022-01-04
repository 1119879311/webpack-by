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
        'import/no-extraneous-dependencies': OFF,
        // 'import/no-extraneous-dependencies': [
        //     'error',
        //     { devDependencies: ['**/*.test.js', '**/*.spec.js'] },
        // ],
        '@typescript-eslint/no-useless-constructor': ERROR,
        '@typescript-eslint/no-empty-function': WARN,
        '@typescript-eslint/no-var-requires': OFF,
        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/explicit-module-boundary-types': OFF,
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/no-use-before-define': ERROR,
        '@typescript-eslint/no-unused-vars': WARN,
    },
};
