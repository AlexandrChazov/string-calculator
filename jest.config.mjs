/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.js$': 'babel-jest',
  }
};

export default config;
