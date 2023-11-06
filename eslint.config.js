// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
    {
        yaml: false,
        stylistic: { indent: 4 },
        ignores: ['components.d.ts'],
    },
    {
        rules: {
            'no-new': 'off',
            'no-console': 'off',
            'import/export': 'off',
        },
    },
    {
        files: ['**/*.json'],
        rules: {
            'indent': ['error', 2],
            'jsonc/indent': ['error', 2],
        },
    },
    // #region vue
    // {
    //     files: ['**/*.vue'],
    //     rules: {
    //         'vue/html-indent': ['error', 2],
    //         'vue/script-indent': ['error', 4],
    //     },
    // },
    // #endregion
)
