module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ['airbnb-base', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-continue': 0,
        'import/no-dynamic-require': 0,
        'no-unused-vars': 0,
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': 2,
        'no-console': 0,
        semi: [2, 'always'],
        '@typescript-eslint/no-explicit-any': 2,
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'no-underscore-dangle': 0,
        'no-plusplus': 0,
        'unicorn/error-message': 0,
        'prefer-destructuring': [
            'error',
            {
                array: false,
                object: true,
            },
        ],
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message:
                    'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
            {
                selector: 'LabeledStatement',
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
        ],
    },
};
