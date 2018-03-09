import React from 'react'
import { Route, Switch } from 'react-router-dom'


import About from "./item1"
import User from "./item2"
import NoMatch from "./item3"

class Router extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path={`/index/item1`} render={() => {
                    return (
                        <About {...this.props}/>
                    )
                }}/>
                <Route exact path={`/index/item2`}  render={() => {
                    return (
                        <User {...this.props}/>
                    )
                }}/>
                <Route exact path={`/index/item3`}  render={() => {
                    return (
                        <NoMatch {...this.props}/>
                    )
                }}/>
            </Switch>
        )
    }
}
export default Router;