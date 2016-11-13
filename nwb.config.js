module.exports = {
  type: 'react-app',
  webpack: {
    publicPath: '',
    extra: {
      module: {
        loaders: [
          { test: /\.html/, loader: 'html' }
        ]
      }
    }
  }
}
