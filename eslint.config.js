import path from 'node:path';
import { createNodejsEslintConfig } from '@pixpilot/dev-config';

export default createNodejsEslintConfig([], {
  // Best practice: ensure the path is relative to your eslint.config.js
  ignoreFilePath: path.join(import.meta.dirname, '.gitignore'),
});
