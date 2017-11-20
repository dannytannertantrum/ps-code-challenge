// This whole file is just a node script
// This uses https://nodejs.org/api/path.html#path_path_join_paths
const path = require('path');

console.log(path.join(__dirname, 'public'));

// module exports is a node thing - it's a way to expose this to another file
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test:/\.s?css/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  }
};

// loaders transform files for actual usage (e.g. the 'module' above)
// "use" allows us to set up multiple loaders