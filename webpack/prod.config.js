var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './client.js',
    output: {
        path: path.join(__dirname, '/../__public__'),
        filename: 'bundle.js',
        publicPath: '/__public__/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?presets[]=react,presets[]=es2015',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                // Future use of CSS Modules
                // loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass')                
                loader: ExtractTextPlugin.extract('style', 'css', 'sass')                
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.DefinePlugin({
            'process.env': {
                BROWSER: JSON.stringify(true)
            }
        })
    ]
};
