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
  env: {
    GOOGLE_SIGN_IN: process.env.GOOGLE_SIGN_IN,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    GOOGLE_AUTH_DOMAIN: process.env.GOOGLE_AUTH_DOMAIN,
    GOOGLE_PROJECT_ID: process.env.GOOGLE_PROJECT_ID,
    GOOGLE_STORAGE_BUCKET: process.env.GOOGLE_STORAGE_BUCKET,
    GOOGLE_MESSAGING_SENDER_ID: process.env.GOOGLE_MESSAGING_SENDER_ID,
    GOOGLE_APP_ID: process.env.GOOGLE_APP_ID,
    GOOGLE_MEASUREMENT_ID: process.env.GOOGLE_MEASUREMENT_ID,
  },
}

const plugins = [nextImages]

/** @type {import('next').NextConfig} */
module.exports = composePlugins(plugins, nextConfig)
