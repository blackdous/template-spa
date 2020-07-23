/*
 * @Descripttion: jest config
 * @Author: asyncnode
 * @Date: 2020-04-23 09:35:18
 * @LastEditors: heidous
 * @LastEditTime: 2020-07-24 00:03:31
 */

module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'vue'],
  // rootDir: path.resolve(__dirname),
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // '^vue$': 'vue/dist/vue.esm.js',
    '^@com/(.*)$': '<rootDir>/src/components/$1'
  },
  transformIgnorePatterns: ['/node_modules/(?!vue)'],
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [
    'src/**/*.{js,ts,vue}',
    '!src/components/**/*.{js,ts}',
    '**/tests/**/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,ts,vue,jsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/(test|tests|examples|config|build|coverage|static)/**',
    '!**/jest.config.js',
    '!**/components/**/index.js',
    '!**/babel.config.js',
    '!**/src/main.js',
    '!**/src/App.vue',
    '!**/postcss.config.js'
  ]
};
