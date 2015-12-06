var path = require('path');
//    webpack = require('webpack');
var config = {
    context: path.join(__dirname, 'dist'),
    entry: [
        './main.js',
        'webpack-dev-server/client?http://localhost:8080/'
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js',
        publicPath: '/'
    }
};
module.exports = config;

