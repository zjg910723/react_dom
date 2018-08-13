import React from 'react'
import { Route, Switch } from 'react-router-dom'

import About from "../pages/item1"
import User from "../pages/item2"
import NoMatch from "../pages/item3"

// const About = () =>
//     import( /* webpackChunkName: "item1" */ '../pages/item1');
// const User = () =>
//     import( /* webpackChunkName: "item2" */ '../pages/item2');
// const NoMatch = () =>
//     User ( /* webpackChunkName: "item2" */ '../pages/item3');



class Router extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path={`/item1`} render={() => {
                    return (
                        <About {...this.props}/>
                    )
                }}/>
                <Route exact path={`/item2`}  render={() => {
                    return (
                        <User {...this.props}/>
                    )
                }}/>
                <Route exact path={`/item3`}  render={() => {
                    return (
                        <NoMatch {...this.props}/>
                    )
                }}/>
            </Switch>
        )
    }
}
export default Router;