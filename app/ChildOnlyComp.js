/**
* @Author: Michael Neumair <mBook>
* @Date:   2016-04-23T16:31:40+02:00
* @Email:  7q7w7e7r@gmail.com
* @Last modified by:   mBook
* @Last modified time: 2016-04-29T09:14:01+02:00
*/

import React, { Component } from 'react'


class ChildOnlyComp extends Component{
    render() {

        let child = React.Children.only(this.props.children); // NOTE: this cause the issue as this.props.children is an array due to Field

        return (
            <div>
                {child}
            </div>
        );
    }
};

export default ChildOnlyComp;
