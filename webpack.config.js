const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = () => {
    return {
        //入口文件配置
        entry: ["babel-polyfill", path.join(__dirname, "views", "index.jsx")],
        //出口文件配置
        output: {
            path: path.resolve(__dirname, "assets"),
            filename: 'scripts/[name].js',
            chunkFilename: 'scripts/[name].[chunkhash].js',
            publicPath: 'assets/',
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
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.(jsx|js)$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|eot|woff2|woff|ttf|svg|jpg|gif|mp3)$/,
                    use: [
                        `file-loader`,
                        {
                            loader: 'file-loader',
                            options: { // 这里的options选项参数可以定义多大的图片转换为base64
                                limit: 50000, // 表示小于50kb的图片转为base64,大于50kb的是路径
                                outputPath: 'images' //定义输出的图片文件夹
                            }
                        },
                        // {
                        //     loader: 'image-webpack-loader',
                        //     options: {
                        //         bypassOnDebug: true, // webpack@1.x
                        //         disable: true, // webpack@2.x and newer
                        //     },
                        // },
                    ]
                }

            ]
        },
        plugins: [
            new ExtractTextPlugin("stylesheets/style.css"),
            // new UglifyJSPlugin()
            new HtmlWebpackPlugin({
                inject: true,
                filename: 'index.html',
                template: path.resolve(__dirname, "index.html")
            }),

        ],
        resolve: {
            extensions: [".js", ".jsx"],
            alias: {
                entry_dir: path.resolve(__dirname),
                modules: path.resolve(__dirname, 'node_modules'),
            }
        },
        mode: "development"
    }

}