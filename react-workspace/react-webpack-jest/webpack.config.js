const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: ['./src/app.js', 'webpack-hot-middleware/client'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
         contentBase: './dist'
   },
    module: {
         rules: [
             {
                 test: /\.(js|jsx)$/,
                 exclude: /(node_modules|bower_components)/,
                 loader: 'babel-loader',
                 options: { presets: ['env'] }
             },


           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
       },
             {
                 test: /\.scss$/,
                 use: [{
                     loader: "style-loader"
                 }, {
                     loader: "css-loader", options: {
                         sourceMap: true
                     }
                 }, {
                     loader: "sass-loader", options: {
                         sourceMap: true
                     }
                 }]
             },
        {
                 test: /\.(png|svg|jpg|gif)$/,
                 use: [
                   'file-loader'
                 ]
               },
             {
             test: /\.(woff|woff2|eot|ttf|otf)$/,
             use: [
               'file-loader'
             ]
           }



     ]
   },
   plugins: [
       new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
          template: 'index.html'
      }),
       new webpack.HotModuleReplacementPlugin()
    ],






   
};