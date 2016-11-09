/**
 * Created by panfei on 2016/11/7.
 */
//����webpack
var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

//�Զ�����html���
var HtmlWebpackPlugin = require('html-webpack-plugin');

//��ȡ��ʽ���
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
   //ҳ������ļ�����
    entry: {
        app: ['./src/js/index.js'],
        vendors: ['jquery', 'react'] //��Ҫ����ĵ��������
    },

    //����ļ��������
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './',
        filename: 'bundle_[name].js'
    },
    module: {
        noParse: [pathToReact], //�������ģ�鲻��Ҫparse��������
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass')},
            {test: /\.js|jsx$/, exclude: /node_modules/, loaders: ['babel?presets[]=es2015,presets[]=react,presets[]=stage-0']},
            {test: /\.(woff|woff2|eot|ttf|otf)$/i, loader: 'url-loader?limit=8192'},
            {test:  /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=25000'}
        ]
    },
    //������صı����������Ժ�ʹ��
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias:{
            jquery: __dirname + '/src/lib/jquery-2.1.4.min.js'
        }
    },
    plugins: [
        //��ȡ����������Դ
        new webpack.optimize.CommonsChunkPlugin({
            //��entry�е�vendors��Ӧ
            name: 'vendors',
            //����Ĺ�����Դ����
            filename: 'common.bundle.js',
            //������entryʵ���������
            minChunks: Infinity
        }),
        //����ѹ������
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        //��jquery��Ϊȫ�ֱ������뵽���д����У��Ϳ���ֱ����ҳ����ʹ��jQuery��
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        //����index.htmlҳ��
        new HtmlWebpackPlugin({
            title: 'webpack demo',  //����title������
            filename: 'index.html',   //�������html���ļ���
            template: 'indexTem.html', //Ҫʹ�õ�ģ���·��
            inject: 'body', //��ģ��ע�뵽�ĸ���ǩ��
            minify: false, //�Ƿ�ѹ��
            hash: true, //�Ƿ�hash��
            cache: false, //�Ƿ񻺴�
            showErrors: false //�Ƿ���ʾ����
        }),
        //����css
        new ExtractTextPlugin('[name].bundle.css',{
            allChunks: true
        })
    ]
};
