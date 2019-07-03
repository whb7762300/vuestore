const path = require('path');

// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
// 如果要配置插件，需要在导出的对象中，挂载一个 plugins 节点
var htmlWebpackPlugin = require('html-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    //webpack编译的源文件
    entry: path.join(__dirname, './src/index.js'),
    //webpack编译的输出文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [ // 所有webpack  插件的配置节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
            filename: 'index.html' // 设置生成的内存页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module: { // 配置所有第三方loader 模块的
        rules: [ // 第三方模块的匹配规则
            {test: /\.css$/, use: ['style-loader', 'css-loader']}, // 处理 CSS 文件的 loader
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']}, // 处理 less 文件的 loader
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}, // 处理 scss 文件的 loader
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: 'url-loader'
            }, // 处理 图片路径的 loader
            // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},// 处理 字体文件的 loader
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}, // 配置 Babel 来转换高级的ES语法,webpack默认只支持一些基础的高级语法
            {test: /\.vue$/, use: 'vue-loader'} // 处理 .vue 文件的 loader
        ]
    },
    resolve: {
        alias: { // 修改 Vue 被导入时候的包的路径
            // "vue$": "vue/dist/vue.js"
        }
    }
};