module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:prettier/recommended',
    ],
    // 解析器 js 用 @babel/eslint-parser ;ts 用@typescript-eslint/parser
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 6,
        sourceType: 'module',
        requireConfigFile: false,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.tsx', '.ts', '.js', '.json'],
            },
        },
    },
    plugins: ['react', 'prettier', 'jsx-a11y', 'react-hooks'],
};
