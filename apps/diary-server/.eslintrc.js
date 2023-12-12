module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['airbnb', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'no-underscore-dangle': 'off',
        'no-console': 'off',
        'no-unused-vars': 'warn',
        'prettier/prettier': 'error',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'error',
        'react/no-unknown-property': [
            'error',
            { ignore: ['css', 'className'] },
        ],
        'arrow-body-style': 'off',
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                ts: 'never',
            },
        ],
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    ['parent', 'sibling', 'index'],
                ],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
    parserOptions: {
        ecmaVersion: 2021,
    },
    settings: {
        'import/resolver': {
            typescript: { project: './tsconfig.json' },
        },
    },
    env: {
        node: true,
    },
};
