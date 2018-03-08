import React from 'react';

import { observer, computed } from "mobx-react"

@observer class Item1 extends React.Component {
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
        console.log(this.props.store.getCustomerList());
    }
}
export default Item1;