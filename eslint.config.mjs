import js from "@eslint/js";
import { builtinModules } from "node:module";
import tseslint from "typescript-eslint";

const backendImportPatterns = ["backend", "backend/**", "**/backend", "**/backend/**"];
const nodeBuiltinPaths = [
  ...new Set(
    builtinModules.flatMap((specifier) => {
      const bareSpecifier = specifier.replace(/^node:/, "");
      return [bareSpecifier, `node:${bareSpecifier}`];
    })
  )
].map((name) => ({
  name,
  message: "Shared modules must remain browser-safe and cannot import Node built-ins."
}));

export default tseslint.config(
  {
    ignores: [
      ".agents/**",
      ".codex/**",
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/playwright-report/**",
      "**/test-results/**"
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["frontend/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: backendImportPatterns,
              message: "Frontend modules must use browser-safe shared contracts, not backend code."
            }
          ]
        }
      ]
    }
  },
  {
    files: ["shared/**/*.ts", "shared/**/*.tsx"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: nodeBuiltinPaths,
          patterns: [
            {
              group: backendImportPatterns,
              message: "Shared modules must remain browser-safe and cannot import backend code."
            }
          ]
        }
      ]
    }
  }
);
