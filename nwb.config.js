module.exports = {
  type: 'react-app',
  webpack: {
    extra: {
      module: {
        loaders: [
          { test: /\.html/, loader: 'html' }
        ]
      }
    }
  }
}
