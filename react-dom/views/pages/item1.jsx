import React from 'react';

class Item1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                内容1
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props);
    }
}
export default Item1;