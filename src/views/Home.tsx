import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';

import '../styles/reflect/home.less';
import About from './About';
import Boss from './modules/Boss';
import Teams from './modules/Teams';
import Person from './modules/Person';
import Login from './Login';

const homeBtn = () => {
    console.log('我是首页');
};

function Home() {
    return (
        <div className="home">
            <div className="side">
                <h1>我是菜单栏</h1>
                <ul>
                    <li>
                        <Link to="/home/about">about</Link>
                    </li>
                    <li>
                        <Link to="/home/boss">boss</Link>
                    </li>
                    <li>
                        <Link to="/home/teams">teams</Link>
                    </li>
                    <li>
                        <Link to="/home/person">person</Link>
                    </li>
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                <div className="navBar">
                    <h1>
                        我是小标题
                        <Button type="primary" onClick={homeBtn}>
                            退出
                        </Button>
                    </h1>
                </div>
                <Switch>
                    {/* <Route path={`${match.path}/app`} component={Home} /> */}

                    <Route path="/home/about" component={About} />
                    <Route path="/home/boss" component={Boss} />
                    <Route path="/home/teams" component={Teams} />
                    <Route path="/home/person" component={Person} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </div>
    );
}

export default hot(Home);
