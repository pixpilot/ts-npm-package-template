import baseConfig from '@pixpilot/dev-config/eslint';
import jestConfig from '@pixpilot/dev-config/eslint-jest';
import prettierConfig from '@pixpilot/dev-config/eslint-prettier';
import { includeIgnoreFile } from '@eslint/compat';
import * as path from 'node:path';

const eslintConfig = [
  includeIgnoreFile(path.join(import.meta.dirname, '.gitignore')),
  ...baseConfig,
  ...jestConfig,
  ...prettierConfig,
];

export default eslintConfig;
