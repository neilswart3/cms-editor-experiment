const nextImages = require('next-images')
const composePlugins = require('next-compose-plugins')

const nextConfig = {
  reactStrictMode: true,
  distDir: '.next',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

const plugins = [nextImages]

/** @type {import('next').NextConfig} */
module.exports = composePlugins(plugins, nextConfig)
