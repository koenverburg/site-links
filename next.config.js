const serverSettings = {}

const isGithubActions = process.env.GITHUB_ACTIONS === 'true' || false
const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
// trim off `<owner>/`

if (isGithubActions) {
  serverSettings.basePath = `/${repo}`
  serverSettings.assetPrefix = `/${repo}/`

  serverSettings.env = {
    isGithubActions,
    assetPrefix: `/${repo}/`,
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
