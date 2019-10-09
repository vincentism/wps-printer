const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'fed-printer.bundle.js'
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react']
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          }
        }]
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 100,
            name: 'images/[name].[ext]',
          }
        }]
      }
    ]
  },
};