import { defineConfig, globalIgnores } from "eslint/config";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const nextPlugin = require("@next/eslint-plugin-next");
const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");
const jsxA11yPlugin = require("eslint-plugin-jsx-a11y");
const importPlugin = require("eslint-plugin-import");
const nextParser = require("next/dist/compiled/babel/eslint-parser");
const globals = require("globals");

const customDesignSystemPlugin = {
  rules: {
    "no-xs-font": {
      meta: {
        type: "problem",
        docs: {
          description: "Ban sub-sm and extra-small font sizes to ensure accessibility and readability",
        },
        messages: {
          bannedFont: "The font size '{{className}}' is banned in lint-scope. Use 'text-sm' or larger.",
          bannedSerif: "Serif fonts ('{{className}}') are banned. Use sans-serif fonts.",
        },
      },
      create(context) {
        function checkString(node, str) {
          if (typeof str !== "string") return;
          const xsMatches = str.match(/\btext-(?:xs|\[(?:[0-9]|1[01]|1[01]\.[0-9]+)px\])\b/g);
          if (xsMatches) {
            xsMatches.forEach((className) => {
              context.report({
                node,
                messageId: "bannedFont",
                data: { className },
              });
            });
          }
          const serifMatches = str.match(/\bfont-serif\b/g);
          if (serifMatches) {
            xsMatches && xsMatches.length > 0;
            serifMatches.forEach((className) => {
              context.report({
                node,
                messageId: "bannedSerif",
                data: { className },
              });
            });
          }
        }

        return {
          Literal(node) {
            if (typeof node.value === "string") {
              checkString(node, node.value);
            }
          },
          TemplateElement(node) {
            if (node.value && typeof node.value.raw === "string") {
              checkString(node, node.value.raw);
            }
          },
        };
      },
    },
  },
};

const eslintConfig = defineConfig([
  {
    name: "next",
    files: ["**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      import: importPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "@next/next": nextPlugin,
      "design-system": customDesignSystemPlugin,
    },
    languageOptions: {
      parser: nextParser,
      parserOptions: {
        requireConfigFile: false,
        sourceType: "module",
        allowImportExportEverywhere: true,
        babelOptions: {
          presets: ["next/babel"],
          caller: {
            supportsTopLevelAwait: true,
          },
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "design-system/no-xs-font": "error",
      "import/no-anonymous-default-export": "warn",
      "react/no-unknown-property": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "jsx-a11y/alt-text": [
        "warn",
        {
          elements: ["img"],
          img: ["Image"],
        },
      ],
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
      "react/jsx-no-target-blank": "off",
      "no-unused-vars": "off",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
