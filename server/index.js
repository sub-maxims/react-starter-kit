var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./../webpack.config.js');
var path = require('path');

module.exports = function(){

    var compiler = webpack(config);

    compiler.plugin('compile', function(){
        console.log('bundling..');
        bundleStart = Date.now();
    });

    compiler.plugin('done', function(){
        console.log('done in ' + (Date.now() - bundleStart) + 'ms!');
    });

    var server = new WebpackDevServer(compiler, {
        // contentBase: 'www',
        hot: true,
        inline: true,
        quiet: false,
        noInfo: true,
        publicPath: '/',
        filename: 'bundle.js',
        stats: {
            colors: true,
        },
    });
    server.listen(8080, 'localhost', function() {
        console.log('please a moment....');
    });
};
