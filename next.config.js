const serverSettings = {}

const isGithubActions = process.env.GITHUB_ACTIONS === 'true' || false

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  // trim off `<owner>/`

  serverSettings.basePath = `/${repo}`
  serverSettings.assetPrefix = `/${repo}/`

  serverSettings.env = {
    isGithubActions,
    prefix: `/${repo}`,
  }
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    unoptimized: true,
    // loader: 'custom'
  },

  ...serverSettings,
}

module.exports = nextConfig
