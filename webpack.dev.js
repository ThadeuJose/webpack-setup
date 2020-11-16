const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


 module.exports = merge(common, {
   mode: 'development',

   devtool: 'inline-source-map',

   // https://webpack.js.org/configuration/dev-server/
   devServer: {
     contentBase: './dist',
     port: 8080,
   },

 });
