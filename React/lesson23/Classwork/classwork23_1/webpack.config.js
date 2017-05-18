module.exports = {
    entry: "./app/src/main.js",
    output:  {filename: 'app/bundle.js' },
    module: {
        loaders: [
            {
                exclude: /node_modules/,

}
        ]
    }
};