import React from 'react'
import { Route, Switch} from 'react-router-dom'


import About from "./pages/item1"
import User from "./pages/item2"
import NoMatch from "./pages/item3"

class Router extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path={`/index/item1`} render={() => {
                    return (
                        <About {...this.props}/>
                    )
                }}/>
                <Route exact path={`/index/item2`} component={User}/>
                <Route exact path={`/index/item3`} component={NoMatch}/>
            </Switch>
        )
    }
}
export default Router;