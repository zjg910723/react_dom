const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (_env) => {
    return {
        //入口文件
        entry: ["babel-polyfill", path.join(__dirname, 'views', 'index.jsx')],
        //出口文件
        output: {
            path: path.resolve(__dirname, "assets"),
            filename: 'scripts/[name].js',
            chunkFilename: 'scripts/[name].[chunkhash].js',
            publicPath: '',
        },
        module: {
            rules: [{
                    test: /\.(css|scss)$/,
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
                    use: [{
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]",
                        }
                    }]
                }
            ],
        },
        plugins: [
            new ExtractTextPlugin("stylesheets/style.css"),
            new HtmlWebpackPlugin({
                inject: true,
                filename: 'index.html',
                template: path.resolve(__dirname, "index.html"),
                minify: { //压缩HTML文件
                    removeComments: true, //移除HTML中的注释
                    collapseWhitespace: true //删除空白符与换行符
                }
            }),
            new UglifyJSPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true
                    }
                },
            }),

        ],
        resolve: {
            extensions: [".js", ".jsx"],
            alias: {
                entry_dir: path.resolve(__dirname),
                modules: path.resolve(__dirname, 'node_modules'),
            }
        },
        mode: 'production',
    }
}