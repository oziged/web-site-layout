const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinifyPlugin = require("babel-minify-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {

  devServer: {
    overlay: true
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.sass$/,
        use: [
          { loader: MiniCssExtractPlugin.loader},
          { loader: 'css-loader?url=false' },
          {
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css'}),
    new MinifyPlugin(),
    new HtmlWebpackPlugin({
      template : './src/index.html'
    }),
    new CopyPlugin([
      { 
        from: path.join(__dirname, '/src/img'), 
        to: 'img' 
      },
    ])
  ],
  devtool: 'cheap-eval-source-map'
};