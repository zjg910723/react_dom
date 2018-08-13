import './styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, withRouter } from 'react-router-dom';

import Nav from './components/nav';
import ActiveRouter from './routes/router';


import Store from './store/store';

window.addEventListener('error', (data)=> {
    console.log(data.message);
    console.log(`错误位于： ${data.lineno}行`);
},false);





import Image from './images/11.jpg';


class Main extends React.Component {


    render(){
        var FirstNav = withRouter(Nav);
        var FirstActiveRouter = withRouter(ActiveRouter);
        return (
            <Router hashType="noslash">
                <div>
                    <FirstNav store={Store} />
                    <div>
                        <img src={Image} alt=""/>
                        <FirstActiveRouter store={Store}/>
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