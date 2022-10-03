// webpack.config.js
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
    entry: {
        "index": path.resolve(__dirname, 'src', 'index.js')  // Entry point. 
    },

    output: { 
        path: path.resolve(__dirname, 'build'), // distribution files are generated in "build/"
        filename: '[name].js',  // "[name]" = KEY used in this file. e.g.) entry: {"index": } => [name] = index 
        library: '[name]'
        },

    clean: true,  // true: build files after deleting preivous built files

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
    ],
}

