import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

// For all TypeScript files in 'src', excluding declaration files.
// const entryPoints = globSync('src/**/*.ts', {
//   ignore: ['src/**/*.d.ts', 'src/**/__tests__/**'], // Ignore declaration files and all __tests__ folders
// });

const entryPoints = 'src/index.ts';

export default {
  input: entryPoints,
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].cjs',
      format: 'cjs',
      exports: 'named',
      // Preserve the original module structure.
      preserveModules: true,
      // Set 'src' as the root. This strips 'src/' from the output path.
      // e.g., 'src/configs/main.ts' becomes 'dist/configs/main.cjs'
      preserveModulesRoot: 'src',
    },
    {
      dir: 'dist',
      entryFileNames: '[name].js',
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.build.json',
      /*
       * Enabling incremental compilation may cause errors and sometimes prevent .d.ts file generation.
       * It can also cause the creation of a .rollup.cache folder, which sometimes results in .d.ts files not being copied.
       */
      incremental: false,
    }),
    terser(),
  ],
};
