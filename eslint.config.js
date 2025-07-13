import baseConfig from '@pixpilot/dev-config/eslint';
import jestConfig from '@pixpilot/dev-config/eslint-jest';
import prettierConfig from '@pixpilot/dev-config/eslint-prettier';

const eslintConfig = [...baseConfig, ...jestConfig, ...prettierConfig];

export default eslintConfig;
