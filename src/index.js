import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router'
import Mainpage from './js/Mainpage';
import Music from './js/Music';
import './css/index.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Mainpage}></Route>
        <Route path="/music" component={Music}></Route>
    </Router>
), document.getElementById('root'));
