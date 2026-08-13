import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-console": "error",
    },
  },
  {
    // Server-side observability: these paths log crawler traffic to the
    // platform's runtime logs on purpose — the output is the feature.
    files: [
      "middleware.ts",
      "app/api/bot-hit/route.ts",
      "app/api/bot-stats/route.ts",
    ],
    rules: {
      "no-console": "off",
    },
  },
];

export default eslintConfig;
