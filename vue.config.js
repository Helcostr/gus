module.exports = {
  publicPath:'./',
  configureWebpack: {
    module: {
      rules: [
        { // https://webpack.js.org/loaders/raw-loader/
          test: /\.txt$/i,
          use: 'raw-loader',
        },
      ]
    },
  },
  pluginOptions: {
    i18n: {
      enableInSFC: false
    }
  }
}
