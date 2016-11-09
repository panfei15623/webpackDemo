/**
 * Created by panfei on 2016/11/8.
 */
import React from 'react';

let Header = React.createClass({
   render: function() {
       console.log($("#container"));
       return (<div>
           <h2 style = {{textAlign:'center'}}>This is a webpack demo -- Automatic Refresh</h2>
       </div>);
   }
});

export default Header;