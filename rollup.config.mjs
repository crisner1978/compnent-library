import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import packageJson from "./package.json" assert { type: "json" };
import css from "rollup-plugin-import-css";

export default [
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom'],
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],

    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        config: {
          path: "./postcss.config.cjs",
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
      }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts(), css()],
  },
]
