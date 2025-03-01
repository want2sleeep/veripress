import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
    {
        name: 'app/files-to-lint',
        files: ['**/*.{js,mjs,jsx,vue}'],
    },

    {
        name: 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    },

    js.configs.recommended,
    ...pluginVue.configs['flat/recommended'],

    {
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/html-indent': ["warn", 4],
            'vue/singleline-html-element-content-newline': 'off',
        },
    },
]
