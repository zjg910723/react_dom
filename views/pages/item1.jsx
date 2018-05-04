import React from 'react';

class Item1 extends React.Component {
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
       
    }
}
export default Item1;