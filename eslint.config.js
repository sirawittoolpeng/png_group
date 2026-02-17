import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  // Ignore build output and dependencies
  { ignores: ['dist', 'node_modules', '**/*.min.js'] },
  // Base ESLint recommended rules
  js.configs.recommended,
  // Vue 3 recommended rules (template + script + style)
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // Optional: customize rules
      // 'vue/multi-word-component-names': 'warn',
      'linebreak-style': 'off',
      'vue/no-unused-vars': 'error',
      'vue/no-unused-components': 'error',
      'vue/no-unused-properties': 'error',
      'vue/no-unused-refs': 'error',
      'vue/no-unused-imports': 'error',
      'vue/no-unused-imports-vue': 'error',
      'vue/no-unused-imports-vue': 'error',
    },
  },
]
