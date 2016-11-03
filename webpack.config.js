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
    //����ļ��������
    output: {
        //����õ���Դ��ŵ�λ��
        path: path.resolve(__dirname, './build'),
        //�������ļ���
        filename: 'bundle.js',
    },
    devtool: '#eval-source-map',
    devServer:{
        port: 8080,
        contentBase: './build', //���徲̬�������Ļ�·��
        hot: true,
        historyApiFallback: true,
        publicPath: "",
        stats: { colors: true },
        plugins: [ new webpack.HotModuleReplacementPlugin() ]
    },
    module: {
        //��ʾ����pathToReact,��������б��룬����������ߴ�����ٶ�
        noParse: [pathToReact],
        //����������
        //module.loaders����ؼ���һ�����á�����֪webpackÿһ���ļ�����Ҫʹ��ʲô������������
        loaders: [
            //����ƥ�������֧�ֵ��ļ���ʽ��������ʽ
            //���������ͨ��"!"���ӣ��������Ǵ�������ʼʹ�õ�;����ʾ������֧��ͨ����ѯ�ַ����ķ�ʽ���ղ���
            //loaderָ����Ҫʹ�õļ���������
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //presets��ָ����Щ����ת����������babel
            //exclude:/node_modules/���ų�node_modules����ļ����еĴ���
            //include:/(admin|consumer)/����ʾֻ����������ļ����еĴ�����д��
            //include/exclude:�ֶ���ӱ��봦����ļ����ļ��У������β���Ҫ������ļ����ļ��У�
            {test: /\.js|jsx$/, exclude: /node_modules/, loaders: ['babel?presets[]=es2015,presets[]=react,presets[]=stage-0']},
            //������Ϣ�Ĳ���"limit=25000"��ʾ������С��8kb��ͼƬ��תΪbase64��ʽ����ʵӦ��˵����8kb�Ĳ�ʹ��url-loader��ӳ�䵽�ļ�������תΪdata url��ʽ��
            //������֧��ͨ����ѯ�ַ����ķ�ʽ���ղ���
            {test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
        ]
    },
    //�ļ���������
    //����Ѱ�Ҳ�����׺���ļ���.js��׺�ļ��Լ�.jsx��׺�ļ������ҵ��ĸ����ĸ�
    resolve: {
        extensions: ['', '.js', '.json'],
        //��������
        alisas: {
            'react': pathToReact
        }
    },
    plugins: [
        //new webpack.BannerPlugin('This file is created by panfei'),
        new webpack.HotModuleReplacementPlugin(),
        //������NoErrorsPlugin�����������������ʱ����Ĵ��벢��¼��ʹ���������ʱ�İ����ᷢ������
        new webpack.NoErrorsPlugin()
    ]
};


// �жϿ�������������������,���uglify�Ȳ��
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