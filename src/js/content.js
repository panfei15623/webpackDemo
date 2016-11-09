/**
 * Created by panfei on 2016/11/8.
 */
import React from 'react';

let content = React.createClass({
    render: function() {
        return (<div>
                <p>
                   webpack-dev-server支持2种自动刷新的方式：
                </p>
                <p>
                    Iframe mode: webpack-dev-server默认的刷新模式
                </p>
                <p style={{lineHeight: '40px'}}>
                    inline mode:刷新模式是直接刷新页面，不会在页面增减任何的元素或者js插件，它是直接放在内存中，这种方式也是官方推荐的，并且速度相对来说比较快。实现Inline-mode刷新模式有很多的方法
                </p>
                <p style={{color: 'red'}}>
                    这里采用直接在webpack.config.js上配置的方式
                </p>
                <p>
                    <img src="../src/images/diff.png" alt=""/>
                </p>
        </div>);
    }
});

export default content;