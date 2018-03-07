import './styles/style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router,Route, Link, Switch, withRouter } from 'react-router-dom'

import Nav from './components/nav'
import ActiveRouter from './Router'

window.addEventListener('error', (data)=> {
    console.log(data.message);
    console.log(`错误位于： ${data.lineno}行`);
},false)



class Main extends React.Component {
    render(){
        var FirstNav = withRouter(Nav);
        var FirstActiveRouter = withRouter(ActiveRouter);
        return (
            <Router hashType="noslash">
                
                <div>
                    <FirstNav />
                    <div>
                        <FirstActiveRouter />
                    </div>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('app')
)