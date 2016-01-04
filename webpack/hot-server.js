import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import config from './dev.config'
import path from 'path'

module.exports = function() {

    var compiler = webpack(config);
    var bundleStart;

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
        noInfo: false,
        publicPath: '/__public__/',
        filename: 'bundle.js',
        stats: {
            colors: true,
        },
    });
    server.listen(8080, 'localhost', function() {
        console.log('please a moment....');
    });
}
