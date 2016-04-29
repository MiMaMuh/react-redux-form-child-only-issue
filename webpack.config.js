/**
* @Author: Michael Neumair <mBook>
* @Date:   2016-04-23T16:47:12+02:00
* @Email:  7q7w7e7r@gmail.com
* @Last modified by:   mBook
* @Last modified time: 2016-04-29T08:49:40+02:00
*/



var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
// good tutorial: http://www.pro-react.com/materials/appendixA/


module.exports = {
    devtool: 'eval-source-map',
    entry: path.join(__dirname, '/app/main.js'),
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { // with .babelrc
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules!postcss'
            }
        ]
    },

    postcss: [
        require('autoprefixer')
    ],

    plugins: [
        new HTMLWebpackPlugin({ // compiles my html files and bundles needed header stuff to it
            template: __dirname + '/app/index.tmpl.html'
        }),
        // new webpack.HotModuleReplacementPlugin() // plugin for hot-module-replacement, with javascript needs some extra-tweaks
    ],

    devServer: {
        // contentBase: './public', // where files get served for the devserver
        // port: '8080', // port of the devserver, default 8080
        inline: true, // auto-load
        colors: true, // add colors to the terminal when the server is running
        historyApiFallback: true, //
        // hot: true // needed for hot-module-replacement-plugin
    }
};
