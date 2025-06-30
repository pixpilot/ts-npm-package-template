# ts-npm-package-template

This template is used for our internal packages. Feel free to use it for your own projects, but please note that some of the settings may not be relevant to your work.

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

```sh
pnpm install
```

### Development

- Source code lives in the `src/` directory.
- Tests are in the `test/` directory.
- To build the package:
  ```sh
  pnpm run build
  ```
- To run tests:
  ```sh
  pnpm test
  ```
- To check code formatting and linting:
  ```sh
  pnpm lint
  pnpm format
  ```
