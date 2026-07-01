import eslintConfigPrettier from "eslint-config-prettier/flat";
import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import globals from "globals";

export default tseslint.config(
    {
      ignores: ["dist/", "node_modules/"],
    },
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    eslintConfigPrettier,             // Disables ESLint rules that conflict with Prettier
    {
      languageOptions: {
        globals: globals.node,        // Prevents false positives on Node.js globals
        parserOptions: {
          projectService: true,       // Connects to tsconfig.json for type-aware linting
          tsconfigRootDir: import.meta.dirname,
        },
      },
    },
);
