import React from 'react';

class Item3 extends React.Component {
    handleClick(e) {
        console.log(e.target)
        debugger;
    }
    render(){
        return (
            <div>
                <button className="" onClick={this.handleClick.bind(this)}>晚上阿斯利康的</button>
                内容3123123123123123
            </div>
        )
    }
}
export default Item3;