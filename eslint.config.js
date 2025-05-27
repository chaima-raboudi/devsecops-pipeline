import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        console: 'readonly',   // <-- ajoute cette ligne
        process: 'readonly',   // souvent utile en Node.js
        // ajoute d'autres globals Node.js si besoin
      }
    },
    rules: {
      'no-unused-vars': 'warn'
    }
  }
];

