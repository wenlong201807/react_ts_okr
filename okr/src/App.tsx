import React from 'react';
import { hot } from 'react-hot-loader/root';
// import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.scss';

import Home from './views/Home';
// import Login from './views/Login';
// import Empty from './views/Empty';

// const { Header, Sider, Content } = Layout;

function App() {
    return (
        <Home />
        // <Router>
        //     <Switch>
        //         <Route path="/" exact render={() => <Redirect to="/login" />} />
        //         <Route path="/login" component={Login} />
        //         <Route path="/home/boss" component={Home} />
        //         <Route path="/404" component={Empty} />
        //     </Switch>
        // </Router>
    );
}

export default hot(App);
