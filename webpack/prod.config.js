import webpack from 'webpack'
import path from 'path'

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
export default config;

