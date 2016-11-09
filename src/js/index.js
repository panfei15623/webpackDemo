/**
 * Created by panfei on 2016/11/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import '../css/main1.css';
//import '../css/main.scss';
import Header from './header';
import Content from './content';

let Container = React.createClass({
   render: function() {
       return (<div>
           <Header></Header>
           <Content></Content>
       </div>);
   }
});

ReactDOM.render(<Container></Container>, document.getElementById("container"));
