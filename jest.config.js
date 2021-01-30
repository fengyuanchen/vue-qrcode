module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironmentOptions: {
    resources: 'usable',
  },
  testMatch: ['**/tests/*.spec.ts'],
};
