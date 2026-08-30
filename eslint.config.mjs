import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

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
  ...nextVitals,
  ...nextTs,
  {
    files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      "design-system": customDesignSystemPlugin,
    },
    rules: {
      "design-system/no-xs-font": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
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
