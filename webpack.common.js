var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: ['./src/config.js', './src/index.js'],
   output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist')
   },
   
   plugins: [
     new HtmlWebpackPlugin({
       title: "Device Control",
       filename: 'index.html',
       template: 'src/index.template.html',
       chunksSortMode: 'none'
     }),
   ],
   module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
             presets: ["es2015", "react"],
             plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
          }
        },
        {
          test: /\.(s*)css$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]',
                esModule: false
              }
            }
          ]
        }
      ]
   }
};
