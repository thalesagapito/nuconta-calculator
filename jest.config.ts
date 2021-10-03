export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/domain/**/*.{ts,vue}',
    'src/components/**/*.{ts,vue}',
    '!**/domain/nu-conta/constants.ts',
    '!**/*.d.ts',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue',
  ],
  setupFilesAfterEnv: ['./jest-setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
}
