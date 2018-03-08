import React from 'react'
import { Route, Switch, Link} from 'react-router-dom'


class Nav extends React.Component{
    render(){
        return (
           <ul>
                <li>
                    <Link to={'/index/item1'}>About</Link>
                </li>
                <li>
                    <Link to={'/index/item2'}>User</Link>
                </li>
                <li>
                    <Link to={'/index/item3'}>NoMatch</Link>
                </li>
           </ul>
        )
    }
   
}
export default Nav;