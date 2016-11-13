module.exports = {
  type: 'react-app',
  webpack: {
    publicPath: 'https://lachlanjc.me/nrafunded/',
    extra: {
      module: {
        loaders: [
          { test: /\.html/, loader: 'html' }
        ]
      }
    }
  }
}
