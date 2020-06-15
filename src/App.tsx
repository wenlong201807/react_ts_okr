import React from 'react';
// import { hot } from 'react-hot-loader/root';
// import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.less';
import { observer } from 'mobx-react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from '@/views/Login';
import Empty from '@/views/Empty';
import Home from '@/views/Home';
import PersonOKRExame from '@/views/TeamOKRExam/PersonOKRExame';
import PersonYearKRDetail from '@/views/TeamOKRExam/PersonYearKRDetail';
import Outer from '@/views/Outer';

export default observer(function App() {
  return (
    <div>
      {/*<Home /> */}
      <HashRouter>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/login" />} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/PersonOKRExame" component={PersonOKRExame} />
          <Route path="/PersonYearKRDetail" component={PersonYearKRDetail} />
          <Route path="/outer" component={Outer} />
          <Route path="/404" component={Empty} />
          {/* */}
        </Switch>
      </HashRouter>
    </div>
  );
});

//  hot(App);
