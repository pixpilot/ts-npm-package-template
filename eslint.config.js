import config from '@pixpilot/dev-config/eslint';
import jestConfig from '@pixpilot/dev-config/eslint-jest';

const eslintConfig = [
  ...config,
  ...jestConfig,
  {
    ignores: [
      'src/types/global.d.ts',
      'CHANGELOG.md',
      ...config[0].ignores,
      ...jestConfig[0].ignores,
    ],
  },
];

export default eslintConfig;
