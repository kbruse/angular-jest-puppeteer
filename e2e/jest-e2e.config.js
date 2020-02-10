module.exports = {
  preset: 'jest-puppeteer',
  testMatch: ["**/?(*.)+(e2e-spec).[t]s"],
  testPathIgnorePatterns: ['/node_modules/', 'dist', 'unit'],
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/e2e/tsconfig-e2e.spec.json'
    }
  }
  // globalSetup: './e2e.global-setup.ts', // will be called once before all tests are executed
  // globalTeardown: './jest.global-teardown.ts' // will be called once after all tests are executed
};
