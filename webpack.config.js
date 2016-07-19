var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // bundle個體&其來源
  entry: {
    'index': "./assets/styles/bundle.js"
  },
  //輸出位置
  output: {
    path: path.resolve(__dirname, '.tmp/public/styles'), //webpack 建置專案的路徑
    filename: "[name].js"
  },

  //命名空間與副檔名省略
  resolve: {
    root: [
      path.join(__dirname, 'assets'),
      path.join(__dirname, 'assets/styles')
    ],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.scss', '.css', 'config.js']
  },

  // Assets處理加載器
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("css-loader")
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css?sourceMap!' + 'sass?sourceMap')
    }, {
      test: /\.(jpe?g|JPE?G|png|PNG|gif|svg|woff|woff2|eot|ttf)$/,
      loader: 'url?limit=20000&name=[sha512:hash:base64:7].[ext]'
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=image/svg+xml"
    }]
  },

  // Assets Source Map
  devtool: 'source-map',

  // 插件功能
  plugins: [
    //壓縮並混淆
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: false,
    //   mangle: false
    // }),

    //bundle出實體CSS檔案
    new ExtractTextPlugin("[name].css")
  ]
}
