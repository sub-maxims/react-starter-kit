var path = require('path'),
    webpack = require('webpack');
var config = {
    devtool: 'eval',
    context: path.join(__dirname, 'client'),
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
    resolve: {
        extensions: ['', '.js', '.jsx'] // resolve file extentions so that we don't have to specify the extention for js and jsx files
    },
    module: {
        loaders: [
            { 
                test: /\.jsx?$/, 
                loader: 'babel?presets[]=react,presets[]=es2015',
               // loaders: ['react-hot', 'babel-loader?experimental'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
module.exports = config;

