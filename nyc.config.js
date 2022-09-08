module.exports = {
  extends: '@istanbuljs/nyc-config-typescript',
  include: [
    'src',
  ],
  reporter: [
    'text',
    'text-summary',
    'json-summary',
    'html',
    'lcov',
  ],
};