const serverSettings = {}

const isGithubActions = process.env.GITHUB_ACTIONS === 'true' || false

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  serverSettings.basePath = `/${repo}`
  serverSettings.assetPrefix = `/${repo}/`
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    unoptimized: true,
  },

  ...serverSettings,
}

module.exports = nextConfig
