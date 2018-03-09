import React from 'react';
import * as mobx from "mobx";
import { observer, computed } from "mobx-react"

@observer class Item1 extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        list:[]
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
    componentDidMount(){
        this.props.store.getCustomerList();
        mobx.autorun(() => {
            this.setState({
                list: mobx.toJS(this.props.store.list)
            })
        })
    }
}
export default Item1;