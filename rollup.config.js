import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import typescriptEngine from "typescript";
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';


export default defineConfig(
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/bundle.cjs.js",
        format: "cjs",
        exports: "auto",
        sourcemap: true,
      },
      {
        file: "dist/bundle.esm.js",
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
        babelHelpers: 'bundled',
      }),
      terser(),
   
      external({ includeDependencies: true }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        typescript: typescriptEngine,
        sourceMap: false,
        exclude: [
          "coverage",
          ".storybook",
          "storybook-static",
          "config",
          "dist",
          "node_modules/**",
          "*.cjs",
          "*.mjs",
          "**/__snapshots__/*",
          "**/__tests__",
          "**/*.test.js+(|x)",
          "**/*.test.ts+(|x)",
          "**/*.mdx",
          "**/*.story.ts+(|x)",
          "**/*.story.js+(|x)",
          "**/*.stories.ts+(|x)",
          "**/*.stories.js+(|x)",
          "setupTests.ts",
          "vitest.config.ts",
        ],
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: "dist/esm/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.(sc|sa|c)ss$/],
    plugins: [dts()],
  }
);
