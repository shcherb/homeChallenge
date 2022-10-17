module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['html', 'text', 'lcov'],
  modulePaths: ['<rootDir>/src', '<rootDir>'],
  testTimeout: 10000,
};
