const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'fed-printer.bundle.js',
    publicPath: "",
    chunkFilename: "[name].js",
    libraryTarget: 'umd',//将你的 library 暴露为所有的模块定义下都可运行的方式
    library: 'fedPrinter'
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