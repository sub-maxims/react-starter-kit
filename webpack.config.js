var path = require('path'),
    webpack = require('webpack');
    
var config = {
    context: path.join(__dirname, 'dist'),
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080/',
        './main.js',
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};
module.exports = config;

