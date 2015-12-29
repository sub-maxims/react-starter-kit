var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './client.js',
    output: {
        path: path.join(__dirname, '/../public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?presets[]=react,presets[]=es2015',
                exclude: /node_modules/
            }
        ]
    }
};
