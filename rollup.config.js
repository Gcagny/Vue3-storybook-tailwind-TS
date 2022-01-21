import vue from 'rollup-plugin-vue';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import css from "rollup-plugin-import-css";

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/library.js'
      }
    ],
    plugins: [
      vue(), peerDepsExternal(), typescript(), css()
    ]
  }
]