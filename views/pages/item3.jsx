import React from 'react';
import $ from "jquery";

class Item3 extends React.Component {
    handleClick(e) {
        console.log(e.target)
        debugger;
    }
    render(){
        return (
            <div>
                <button className="" onClick={this.handleClick.bind(this)}>晚上阿斯利康的</button>
                内容3
            </div>
        )
    }
}
export default Item3;