import webpack from 'webpack'
import path from 'path'

var config = {
    devtool: 'eval',
    context: path.join(__dirname, '/../client'),
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080/',
        './main.js'
    ],
    output: {
        path: path.join(__dirname, '/../public'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
export default config

