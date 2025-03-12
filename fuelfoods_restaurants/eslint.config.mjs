import nextPlugin from '@next/eslint-plugin-next';

export default [
  {
    plugins: {
      next: nextPlugin
    },
    rules: {
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  }
]; 