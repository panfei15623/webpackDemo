/**
 * Created by panfei on 2016/10/28.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './style.css';

import HelloHandler from './hello.js';

let App = React.createClass({
    render: function() {
        return (
            <div className="nav">
                <HelloHandler></HelloHandler>
            </div>
        );
    }
});

    ReactDOM.render(<App />, document.getElementById("react"));