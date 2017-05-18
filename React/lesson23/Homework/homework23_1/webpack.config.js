
module.exports = {
    entry: {

        "./build/bundle": "./main.js"
    } ,

    output: {
        filename: '[name].js'
    },


    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query:
                    {
                        presets: ['react']
                    }
            }
        ]
    }
};
