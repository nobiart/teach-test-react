import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
// import i18next from "eslint-plugin-i18next";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js, pluginReact },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  // i18next.configs["flat/recommended"],
  {
    linterOptions: {
      reportUnusedInlineConfigs: "error",
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "import/prefer-default-export": "off",
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      indent: [2, 2],
    },
  },
  {
    ignores: ["dist", "node_modules", ".vscode", ".idea", "eslint.config.mts"],
  },
]);
