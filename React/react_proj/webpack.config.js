var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        "./public/js/build/bundle": "./src/main.js",


    } ,

    output: {
        filename: '[name].js'
    },
    devtool: "#eval-source-map",

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query:
                    {
                        presets: ["es2015", "stage-0", "react"]
                    }
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("css-loader")
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("./public/styles/main.css")
    ]
};



