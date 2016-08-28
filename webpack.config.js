var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './src',

  output: {
    path: __dirname + '/dist/',
    filename: 'index.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      warnings: false
    })
  ],

  resolve: {
    root: [
      path.resolve('./src')
    ],
    extensions: ['', '.js', '.jsx', '.css']
  },

  postcss: [
    require('autoprefixer')
  ]
}
