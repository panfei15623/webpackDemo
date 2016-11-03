/**
 * Created by panfei on 2016/10/28.
 */
var webpack = require('webpack');
var path = require('path');

var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/build/react.min.js');

var prod = process.env.NODE_ENV === 'production' ? true : false;

module.exports = {
    entry: {
        app: [
            'webpack-dev-server/client?http://127.0.0.1:8080/',
            'webpack/hot/dev-server',
            './entry.js'
        ]
    },
    //entry: ['webpack/hot/dev-server', path.resolve(__dirname, './entry.js')],
    //入口文件输出配置
    output: {
        //打包好的资源存放的位置
        path: path.resolve(__dirname, './build'),
        //打包后的文件名
        filename: 'bundle.js',
    },
    devtool: '#eval-source-map',
    devServer:{
        port: 8080,
        contentBase: './build', //定义静态服务器的基路径
        hot: true,
        historyApiFallback: true,
        publicPath: "",
        stats: { colors: true },
        plugins: [ new webpack.HotModuleReplacementPlugin() ]
    },
    module: {
        //表示跳过pathToReact,不对其进行编译，这样可以提高打包的速度
        noParse: [pathToReact],
        //加载器配置
        //module.loaders是最关键的一块配置。它告知webpack每一种文件都需要使用什么加载器来处理
        loaders: [
            //用于匹配加载器支持的文件格式的正则表达式
            //多个加载器通过"!"连接，加载器是从右向左开始使用的;？表示加载器支持通过查询字符串的方式接收参数
            //loader指定了要使用的加载器类型
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //presets：指定哪些代码转换器将启动babel
            //exclude:/node_modules/，排除node_modules这个文件夹中的代码
            //include:/(admin|consumer)/，表示只针对这两个文件夹中的代码进行打包
            //include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）
            {test: /\.js|jsx$/, exclude: /node_modules/, loaders: ['babel?presets[]=es2015,presets[]=react,presets[]=stage-0']},
            //配置信息的参数"limit=25000"表示将所有小于8kb的图片都转为base64形式（其实应该说超过8kb的才使用url-loader来映射到文件，否则转为data url形式）
            //加载器支持通过查询字符串的方式接收参数
            {test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
        ]
    },
    //文件解析配置
    //依次寻找不带后缀的文件，.js后缀文件以及.jsx后缀文件。先找到哪个是哪个
    resolve: {
        extensions: ['', '.js', '.json'],
        //别名配置
        alisas: {
            'react': pathToReact
        }
    },
    plugins: [
        //new webpack.BannerPlugin('This file is created by panfei'),
        new webpack.HotModuleReplacementPlugin(),
        //配置了NoErrorsPlugin插件，用来跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
        new webpack.NoErrorsPlugin()
    ]
};


// 判断开发环境还是生产环境,添加uglify等插件
if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || [])
        .concat([
            new webpack.DefinePlugin({
                __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.optimize.OccurenceOrderPlugin(),
        ]);
} else {
    module.exports.devtool = 'source-map';
    module.exports.devServer = {
        port: 8080,
        contentBase: './',
        hot: true,
        historyApiFallback: true,
        publicPath: "",
        stats: { colors: true },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    };
}