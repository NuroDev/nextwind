const WindiCSS = require('windicss-webpack-plugin')

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.plugins.push(new WindiCSS());

    return config
  },
}
