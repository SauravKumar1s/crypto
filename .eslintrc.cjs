module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  "rules": {
    "@typescript-eslint/ban-types": ["error", {
      "types": {
        "{}": "Don't use `{}` as a type. Use more specific types instead.",
        "object": "Avoid using the 'object' type. Use more specific types instead."
        // Add more banned types if desired
      }
    }]
  }
  
}
