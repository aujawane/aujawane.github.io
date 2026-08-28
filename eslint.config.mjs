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
    ignores: [
      "contacts_application/**",
      "images/**",
      "index.html",
      "main.js",
      "style.css",
      "next-env.d.ts",
      ".next/**",
    ],
  },
];

export default eslintConfig;
