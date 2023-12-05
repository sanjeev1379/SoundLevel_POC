module.exports = {
    root: true,
    plugins: [
        'react',
        'react-hooks',
        'react-native',
        'import',
        'jsx-control-statements',
        'unused-imports'
    ],

    parserOptions: {
        sourceType: 'module',
        jsx: true,
        ecmaVersion: 2015,
        requireConfigFile: false
    },

    parser: '@babel/eslint-parser',

    extends: [
        '@react-native',
        'plugin:jsx-control-statements/recommended',
        'plugin:prettier/recommended'
    ],

    rules: {
        'react/jsx-filename-extension': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_'
            }
        ],
        'sort-imports': [
            'error',
            {
                ignoreDeclarationSort: true
            }
        ],
        // You can override any rules you want
        'comma-dangle': 'off',
        semi: ['error', 'always'],
        'react/no-unused-prop-types': 'warn',
        'react-native/no-unused-styles': 'warn',
        'react-native/no-inline-styles': 'warn',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhact-assertions': 'off'
    }
};
