import config from '@pixpilot/dev-config/eslint';
import jestConfig from '@pixpilot/dev-config/eslint-jest';

const eslintConfig = [...config, ...jestConfig];

export default eslintConfig;
