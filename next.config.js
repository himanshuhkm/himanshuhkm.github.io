// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader'
    })
    return cfg
  }
})

module.exports = {
  distDir: '.next',
}

module.exports = {
  webpack: (cfg) => {
      cfg.module.rules.push(
          {
              test: /\.md$/,
              loader: 'frontmatter-markdown-loader'
          }
      )
      return cfg;
  }
}