import webpack from 'webpack'
import path from 'path'

export default {
    devtool: 'eval',
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080/',
        './client.js'
    ],
    output: {
        path: path.join(__dirname, '/../__public__'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/__public__/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                // future use of CSS Modules
                // loaders: [ 'style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass?sourceMap' ]                
                loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]                
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                BROWSER: JSON.stringify(true)
            }
        })
    ]
}
