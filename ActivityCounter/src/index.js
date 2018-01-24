import { hello, goodbye } from "./lib";
import { SkiDayList } from './components/SkiDayList'
import { App } from "./components/App";
import { Whoops404 } from "./components/Whoops404";
import { Router, Route, hashHistory } from 'react-router'

var React = require('react');
var ReactDOM = require('react-dom');

window.React = React
ReactDOM.render(
    // <SkiDayList />
    <Router history = {hashHistory}>
        <Route path="/" component={App} />
        <Route path="/list-days" component={App}>
            <Route path=":filter" component={App} />
        </Route>
        <Route path="/add-day" component={App} />        
        <Route path="*" component={Whoops404} />
    </Router>,
    document.getElementById('react-container'))