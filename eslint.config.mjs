import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    ...tseslint.configs.recommended,
];
