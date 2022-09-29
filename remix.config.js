/**
 * @type {import('@remix-run/dev').AppConfig}
 */
require('dotenv-vault').config({ debug: true })

console.log(process.env) // output for debugging purposes. remove when going to production.

module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
};
