
var path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
        {test: /\.(js)$/,use: 'babel-loader'},
        {test: /\.scss$/,use: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({template: './app/index.html'})
  ]

};
