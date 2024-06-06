import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import babelParser from "@babel/eslint-parser";

export default [
  { files: ["**/*.js", "**/*.mjs"],languageOptions: { globals: globals.browser ,  parser: babelParser}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];