module.exports = {
    root: true,
    plugins: ['stylelint-order'],
    extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen',
                    'function',
                    'if',
                    'each',
                    'include',
                    'mixin',
                ],
            },
        ],
        'no-empty-source': null,
        'named-grid-areas-no-invalid': null,
        'unicode-bom': 'never',
        'no-descending-specificity': null,
        'font-family-no-missing-generic-family-keyword': null,
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        'rule-empty-line-before': [
            'always',
            {
                ignore: ['after-comment', 'first-nested'],
            },
        ],
        'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    },
    ignoreFiles: [
        '/dist/**/*',
        'node_modules/**/*',
        'build/**/*',
        '**/*.js',
        '**/*.jsx',
        '**/*.tsx',
        '**/*.ts',
    ],
};
