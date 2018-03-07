var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: { app: ["./app/index.jsx"] },
    output: {
        path: path.resolve(__dirname, "./build"),
        // publicPath: "",
        filename: "build.js"
    },
    // resolve: {
    //     extensions: ["", ".js", "jsx"]
    // },
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                use: ["babel-loader"],
                exclude: /node_module/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'css-loader',
                }],

            }
        ],

    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     "process.env.NODE.ENV": "development"
        // }),
        // new webpack.HotModuleReplacementPlugin()
    ]
}