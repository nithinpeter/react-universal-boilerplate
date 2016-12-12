// const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

const config = {
    entry: './build/client.js',
    output: {
        filename: 'main.js',
        path: './public'
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.(js|jsx)$/, 
    //             loader: 'babel-loader', 
    //             options: {
    //                 presets: ["es2015", "react"]
    //             },
    //         }
    //     ]
    // },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        // new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};

module.exports = config;