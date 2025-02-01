// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts', // Adjust this if your entry file is different
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    // Allows Rollup to resolve modules from node_modules
    resolve(),
    // Converts CommonJS modules to ES6
    commonjs(),
    // Compiles TypeScript files
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          // Ensure declarations are generated for consumers
          declaration: true,
          // Optionally adjust other compiler settings here
        },
      },
      clean: true,
    }),
    // Process CSS files imported in your components.
    // This plugin can bundle CSS into your JS file or extract it to a separate file.
    // Set `extract: true` to output a separate CSS file.
    postcss({
      extract: true,
      minimize: true,
      sourceMap: true,
    }),
  ],
  // Mark peer dependencies as external so they're not bundled into your library.
  external: ['react', 'react-dom'],
};