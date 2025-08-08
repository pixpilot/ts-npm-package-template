# 🧩 ts-npm-package-template

This template is used for our internal packages. Feel free to use it for your own projects,
but please note that some of the settings may not be relevant to your work.

## ℹ️ About This Template

This repository provides a starting point for TypeScript-based npm packages. It includes:

- TypeScript configuration for building and type-checking
- Pre-configured ESLint and Prettier for code quality and formatting
- Jest for unit testing
- Example source and test files
- Coverage reporting
- Modern package management with pnpm

## 🚀 Usage

### 📦 Installation

Clone this repository and install dependencies using pnpm:

```bash
pnpm install
```

### 💻 Development

- Source code lives in the `src/` directory.
- Tests are in the `tests/` directory.
- To build the package:

  ```bash
  pnpm run build
  ```

- To run tests:

  ```bash
  pnpm test
  ```

- To check code formatting and linting:

  ```bash
  pnpm lint
  pnpm format
  ```

## 🚢 Releases

### 🤖 Automated Release (Recommended)

This monorepo uses the [Changeset Autopilot GitHub Action](https://github.com/pixpilot/changesets-autopilot) for fully automated, dependency-aware versioning and publishing. It:

- Detects conventional commits and generates changesets automatically
- Handles branch-based release channels (main, next, beta, etc.)
- Versions and publishes only changed packages to npm
- Manages pre-releases and dist-tags
- Runs entirely in CI for maximum reliability

**How it works:**

- On every push to a release branch, the action analyzes commits, generates changesets, versions packages, and publishes to npm.
- No manual steps are needed—just follow the conventional commit format and push to the correct branch.
- See the [Changeset Autopilot documentation](https://github.com/pixpilot/changesets-autopilot) for setup and configuration details.

### 📝 Manual Release

Manual releases are possible if needed (for example, for hotfixes or if CI is unavailable):

1. Ensure you have an `NPM_TOKEN` with publish rights set in your environment (for CI/CD, set as a secret).
2. Run the following commands from the root:

   ```sh
   pnpm changeset
   pnpm changeset version
   pnpm changeset publish
   ```

   This will version and publish only those workspace packages with relevant changes.

- Each package is versioned independently.
- Git tags are created in the format `<package-name>-<version>`.
- See `.changeset/config.json` for configuration details.

For more, see the [Changesets documentation](https://github.com/changesets/changesets).

## ⚡ Quick Start

To get started quickly, you can follow these steps:

- [ ] Add your own code and tests to the `src` and `test` directories.
- [ ] Update the `README.md` with usage instructions and examples.
- [ ] Update the `package.json` with your package information.
- [ ] Run `pnpm install` to install dependencies.
- [ ] Run `pnpm test` to run tests.
- [ ] Run `pnpm build` to build the package.
- [ ] Run `pnpm lint` to lint the code.
- [ ] Run `pnpm format` to format the code.
- [ ] Run `pnpm release` to release a new version.
