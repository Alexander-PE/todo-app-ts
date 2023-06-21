module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json' // Required for typescript-eslint-parser
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // vite does not require you to import React into each component file
    'react/prop-types': 'off' // typescript already checks for prop types
  }
}
