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
        this.setState({count: this.state.count + 1});  
        console.log(this.state.count);
        this.setState({count: this.state.count + 1}); 
        console.log(this.state.count); 
        setTimeout(() => {
            this.setState({ count: this.state.count + 1 });
            console.log(this.state.count);
        }, 1000);
        
    }
    componentDidMount() {
        // this.props.store.getCustomerList();
        // mobx.autorun(() => {
        //     this.setState({
        //         list: mobx.toJS(this.props.store.list)
        //     })
        // })
        this.incrementMultiple();
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
                </ul>
            </div>
        )
    }
    
}
export default Item1;