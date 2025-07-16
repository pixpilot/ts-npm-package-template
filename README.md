# ts-npm-package-template

This template is used for our internal packages. Feel free to use it for your own projects,
but please note that some of the settings may not be relevant to your work.

## About This Template

This repository provides a starting point for TypeScript-based npm packages. It includes:

- TypeScript configuration for building and type-checking
- Pre-configured ESLint and Prettier for code quality and formatting
- Jest for unit testing
- Example source and test files
- Coverage reporting
- Modern package management with pnpm

## Usage

### Installation

Clone this repository and install dependencies using pnpm:

```bash
pnpm install
```

### Development

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

## Note on Release Workflow

The release workflow is disabled for this template by default. If you copy this repo, you may want to remove the conditional line in `.github/workflows/release.yml`:

```
if: ${{ !endsWith(github.repository, 'ts-npm-package-template') }}
```

But it works as-is: releases only run if your repo name does not end with `ts-npm-package-template`.

---

This is a template for quickly creating a TypeScript npm package with modern tooling.

## Quick Start

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
