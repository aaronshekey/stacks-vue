module.exports = {
  map: false,
  autoprefixer: false,
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: [ `./public/**/*.html`, `./src/**/*.vue` ],
      defaultExtractor (content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
      },
      whitelist: [],
      whitelistPatterns: [ /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/ ],
    })
  ]
}