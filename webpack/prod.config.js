var path = require('path'),
    webpack = require('webpack');
    
var config = {
    devtool: 'source-map',
    context: path.join(__dirname, 'dist'),
    entry: [
        './main.js',
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js',
        publicPath: '/'
    }
};
module.exports = config;

