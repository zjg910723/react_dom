import React from 'react';
import * as mobx from "mobx";
import { observer, computed } from "mobx-react"

@observer class Item1 extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        list:[], 
        count: 0
    }
    incrementMultiple() {  
        this.setState(() =>({count: this.state.count + 1}));  
    }
    componentDidMount() {
        // this.props.store.getCustomerList();
        // mobx.autorun(() => {
        //     this.setState({
        //         list: mobx.toJS(this.props.store.list)
        //     })
        // })
    }
    render(){
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return(
                                <li key={index}>
                                    <div><img src={item.picture.large} alt=""/></div>
                                    <span>{item.nat}</span>
                                </li>
                            )
                        })
                    }
                    <li onClick={this.incrementMultiple.bind(this)}>123123123</li>
                </ul>
            </div>
        )
    }
    
}
export default Item1;