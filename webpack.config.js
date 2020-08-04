const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');


module.exports = {

    mode: 'development',

    devtool: 'eval',

    entry: [
        './src/index.js',
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },

    devServer: {
        publicPath: '/dist/',
        hot: true,
        port: 3000,
        inline: true,
        compress: true,
        openPage: './dist/index.html'
    },

    plugins: [
        new CleanWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'index.css',
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        new VueLoaderPlugin()
    ],

    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.js',//指定 vue 對應使用的真實 js 檔案
        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["@babel/preset-env"],
                    plugins: ["@babel/plugin-proposal-class-properties"],
                },
            },
            {
                test: /\.css$/i,
                use: [
                    'vue-style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [autoprefixer]
                        }
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'vue-style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [autoprefixer]
                        }
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ],
    },

    optimization: {
        minimize: true
    }
};