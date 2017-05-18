const path = require('path');


module.exports = {
    entry: {
        "./lesson19/Classwork/classwork19_1/build/bundle": "./lesson19/Classwork/classwork19_1/main.jsx",
        "./lesson19/Classwork/classwork19_2/build/bundle": "./lesson19/Classwork/classwork19_2/main.jsx",
        "./lesson19/Classwork/classwork19_3/build/bundle": "./lesson19/Classwork/classwork19_3/main.jsx",
        "./lesson19/Homework/homework19_1/build/bundle": "./lesson19/Homework/homework19_1/main.jsx",
        "./lesson19/Homework/homework19_2/build/bundle": "./lesson19/Homework/homework19_2/main.jsx",
        "./lesson19/Homework/homework19_3/build/bundle": "./lesson19/Homework/homework19_3/main.jsx",
        "./lesson20/Classwork/classwork20_1/build/bundle": "./lesson20/Classwork/classwork20_1/main.jsx",
        "./lesson20/Classwork/classwork20_2/build/bundle": "./lesson20/Classwork/classwork20_2/main.jsx",
        "./lesson20/Classwork/classwork20_3/build/bundle": "./lesson20/Classwork/classwork20_3/main.jsx",
        "./lesson20/Homework/homework20_1/build/bundle": "./lesson20/Homework/homework20_1/main.jsx",
        "./lesson20/Homework/homework20_2/build/bundle": "./lesson20/Homework/homework20_2/main.jsx",
        "./lesson20/Homework/homework20_3/build/bundle": "./lesson20/Homework/homework20_3/main.jsx",
        "./lesson21/Classwork/classwork21_1/build/bundle": "./lesson21/Classwork/classwork21_1/main.jsx",
        "./lesson21/Classwork/classwork21_2/build/bundle": "./lesson21/Classwork/classwork21_2/main.jsx",
        "./lesson21/Classwork/classwork21_3/build/bundle": "./lesson21/Classwork/classwork21_3/main.jsx",
        "./lesson21/Homework/homework21_1/build/bundle": "./lesson21/Homework/homework21_1/main.jsx",
        "./lesson21/Homework/homework21_2/build/bundle": "./lesson21/Homework/homework21_2/main.jsx",
        "./lesson21/Homework/homework21_3/build/bundle": "./lesson21/Homework/homework21_3/main.jsx",
        "./lesson22/Classwork/classwork22_1/build/bundle": "./lesson22/Classwork/classwork22_1/main.jsx",
        "./lesson22/Classwork/classwork22_2/build/bundle": "./lesson22/Classwork/classwork22_2/main.jsx",
        "./lesson22/Classwork/classwork22_3/build/bundle": "./lesson22/Classwork/classwork22_3/main.jsx",
        "./lesson22/Homework/homework22_1/build/bundle": "./lesson22/Homework/homework22_1/main.jsx",
        "./lesson22/Homework/homework22_2/build/bundle": "./lesson22/Homework/homework22_2/main.jsx",
        "./lesson22/Homework/homework22_3/build/bundle": "./lesson22/Homework/homework22_3/main.jsx",
        "./lesson24/Classwork/classwork24_1/build/bundle": "./lesson24/Classwork/classwork24_1/index.js",
        "./lesson24/Classwork/classwork24_2/build/bundle": "./lesson24/Classwork/classwork24_2/index.js",
        "./lesson24/Classwork/classwork24_3/build/bundle": "./lesson24/Classwork/classwork24_3/index.js",
        "./Lesson24/Homework/homework24_1/build/bundle": "./Lesson24/Homework/homework24_1/main.jsx",
        "./Lesson24/Homework/homework24_2/build/bundle": "./Lesson24/Homework/homework24_2/main.jsx",
        "./Lesson24/Homework/homework24_3/build/bundle": "./Lesson24/Homework/homework24_3/main.jsx",
        "./lesson25/Classwork/classwork25_1/build/bundle": "./lesson25/Classwork/classwork25_1/main.jsx",
        "./lesson25/Classwork/classwork25_2/build/bundle": "./lesson25/Classwork/classwork25_2/src/main.jsx",
        "./lesson25/Classwork/classwork25_3/build/bundle": "./lesson25/Classwork/classwork25_3/src/main.jsx",
        "./Lesson25/Homework/homework25_1/build/bundle": "./Lesson25/Homework/homework25_1/src/main.jsx",
        "./Lesson25/Homework/homework25_2/build/bundle": "./Lesson25/Homework/homework25_2/src/main.jsx",
        "./lesson26/Classwork/classwork26_1/build/bundle": "./lesson26/Classwork/classwork26_1/src/main.jsx",
        "./lesson26/Classwork/classwork26_2/build/bundle": "./lesson26/Classwork/classwork26_2/src/main.jsx",
        "./lesson26/Classwork/classwork26_3/build/bundle": "./lesson26/Classwork/classwork26_3/src/main.jsx",
        "./Lesson26/Homework/homework26_1/build/bundle": "./Lesson26/Homework/homework26_1/src/main.jsx",
        "./Lesson26/Homework/homework26_2/build/bundle": "./Lesson26/Homework/homework26_2/src/main.jsx",

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
            }
        ]
    }
};



