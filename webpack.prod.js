const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = () => {

    return {
        //入口文件
        entry: ["babel-polyfill", path.join(__dirname, 'views', 'index.jsx')],
        //出口文件
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'assets/scripts'),
            publicPath: "/"
        },
        module: {
            rules: [{
                    test: /\.(css|scss)$/,
                    // use: ["style-loader", "css-loader", "postcss-loader"],
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: ["css-loader", "postcss-loader"],
                    }),

                },
                {
                    test: /\.(jsx|js)$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|eot|woff2|woff|ttf|svg|jpg|gif|mp3)$/,
                    // use: [
                    //     `file-loader?name=[name].[ext]&publicPath=../../assets/wow_event/${envFile}/images/&outputPath=./../images/`
                    // ],
                    use: [
                        `url-loader`
                    ]
                }
            ],
        },
        plugins: [
            new ExtractTextPlugin("../stylesheets/style.css"),
            new UglifyJSPlugin()

        ],
        resolve: {
            extensions: [".js", ".jsx"],
            alias: {
                entry_dir: path.resolve(__dirname),
                modules: path.resolve(__dirname, 'node_modules'),
            }
        },
    }
}