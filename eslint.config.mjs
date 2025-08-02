import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "public/",
      "eslint.config.js",
      "eslint.config.mjs",
    ],
  },
  { 
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
        jsx: true,
      },
     },
     globals: globals.browser,
   }, 
   plugins: { 
    "@typescript-eslint": tseslint,
    react: pluginReact,
   }, 
   rules: {
    ...tseslint.configs.recommended.rules,
    ...pluginReact.configs.recommended.rules,
   },
   settings: {
   react: {
     version: "detect",
    }
   }
  },
]);
  