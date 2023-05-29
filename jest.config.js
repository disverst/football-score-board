const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  collectCoverage: true,
  rootDir: '.',
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['components/**/*.{js,jsx,ts,tsx}'],
  roots: ['<rootDir>/.test/'],
  modulePaths: ['<rootDir>/'],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      branches: process.env.MIN_BRANCHES_COVERAGE,
      functions: process.env.MIN_FUNCTIONS_COVERAGE,
      lines: process.env.MIN_LINES_COVERAGE,
      statements: process.env.MIN_STATEMENTS_COVERAGE,
    },
  },
};

module.exports = createJestConfig(customJestConfig);
