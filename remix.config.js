/**
 * @type {import('@remix-run/dev').AppConfig}
 */
require('dotenv-vault').config({ debug: true })

module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
};
