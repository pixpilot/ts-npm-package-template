import baseConfig from '@pixpilot/dev-config/eslint';
import jestConfig from '@pixpilot/dev-config/eslint-jest';
import prettierConfig from '@pixpilot/dev-config/eslint-prettier';

const eslintConfig = [
  ...baseConfig,
  ...jestConfig,
  {
    ignores: [
      'src/types/global.d.ts',
      'CHANGELOG.md',
      ...baseConfig[0].ignores,
      ...jestConfig[0].ignores,
    ],
  },
  ...prettierConfig,
];

export default eslintConfig;
