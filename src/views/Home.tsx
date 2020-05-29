import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { HashRouter, Route, Switch, span } from 'react-router-dom';
// import {LocationProvider, Router} from '@reach/router'
import { Menu } from 'antd';
import { AppstoreOutlined,SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

import '../styles/reflect/home.less';
import About from './About';
import Teams from './modules/Teams';
import BaseCenterOKR from './modules/BaseCenterOKR';
import TestEnvTeamOKR from './modules/TestEnvTeamOKR';
import TestEnvTeamOKR2 from './modules/TestEnvTeamOKR2';
import Login from './Login';
import Empty from './Empty';
import CollapseSelf from '../components/collapse';
// import List from '../components/List';
import editEdit from '../components/editEdit';
import multiRowForm from '../components/multiRowForm';
import CRUD from '../components/CRUD';
import Editorrow from '../components/EditorRow';
import Editorcell from '../components/Editorcell';
import testMobx from './testMobx';

import history from '@/historys';

function Home() {
  let state: any = {
    theme: 'light',
    current: '/home/list',
  };
  let [status, setStatus] = useState(state);

  const handleClick = (e) => {
    setStatus({
      current: e.key,
    });
  };

  const jumpToTarget = (path) => {
    console.log(path);
    history.push(path);
  };
  return (
    <div className="home-container">
      <div className="okrTitle">OKR管理</div>
      <div className="home">
        <div className="side">
          <Menu
            theme={status.theme}
            onClick={handleClick}
            style={{ width: 200 }}
            defaultOpenKeys={['sub5']}
            selectedKeys={[status.current]}
            mode="inline"
          >
            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="我的OKR">
              <Menu.Item key="/home/TestEnvTeamOKR0">
                <span onClick={() => jumpToTarget('/home/TestEnvTeamOKR')}>王伟(待定)</span>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="团队OKR">
            <Menu.Item key="/home/TestEnvTeamOKR">
              <span onClick={() => jumpToTarget("/home/TestEnvTeamOKR")}>测试环境团队</span>
            </Menu.Item>
            <Menu.Item key="/home/TestEnvTeamOKR2">
              <span onClick={() => jumpToTarget("/home/TestEnvTeamOKR2")}>测试环境团队2</span>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<AppstoreOutlined />} title="个人OKR管理">
            <Menu.Item key="5">张利</Menu.Item>
            <Menu.Item key="6">李雷</Menu.Item>
            <Menu.Item key="7">张三</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<SettingOutlined />} title="团队OKR考核">
            <Menu.Item key="9">考核全景视图</Menu.Item>
            <Menu.Item key="10">系统组</Menu.Item>
            <Menu.Item key="11">开发组</Menu.Item>
            <Menu.Item key="12">网络组</Menu.Item>
            <Menu.Item key="13">前端</Menu.Item>
          </SubMenu>
          <Menu.Item key="/home/BaseCenterOKR">
            <span onClick={() => jumpToTarget("/home/BaseCenterOKR")}>中心OKR基线</span>
          </Menu.Item>
          <SubMenu key="sub5" icon={<AppstoreOutlined />} title="测试中...">
            <Menu.Item key="/home/about">
              <span onClick={() => jumpToTarget("/home/about")}>自我测试</span>
            </Menu.Item>

            <Menu.Item key="/home/teams">
              <span onClick={() => jumpToTarget("/home/teams")}>测试环境团队</span>
            </Menu.Item>
            <Menu.Item key="/home/collapse">
              <span onClick={() => jumpToTarget("/home/collapse")}>折叠面板(共用的)</span>
            </Menu.Item>

            {/*
            <Menu.Item key="/home/list">
              <span onClick={() => jumpToTarget("/home/list">列表</span>
            </Menu.Item>
            */}
            <Menu.Item key="/home/CRUD">
              <span onClick={() => jumpToTarget("/home/CRUD")}>表单CRUD</span>
            </Menu.Item>
            <Menu.Item key="/home/multiRowForm">
              <span onClick={() => jumpToTarget("/home/multiRowForm")}>多行表单</span>
            </Menu.Item>
            <Menu.Item key="/home/editEdit">
              <span onClick={() => jumpToTarget("/home/editEdit")}>表单</span>
            </Menu.Item>
            <Menu.Item key="/home/EditorRow">
              <span onClick={() => jumpToTarget("/home/EditorRow")}>单行全编辑</span>
            </Menu.Item>
            <Menu.Item key="/home/Editorcell">
              <span onClick={() => jumpToTarget("/home/Editorcell")}>编辑单元格</span>
            </Menu.Item>
            <Menu.Item key="login">
              <span onClick={() => jumpToTarget("/login")}>登录</span>
            </Menu.Item>
            <Menu.Item key="Empty">
              <span onClick={() => jumpToTarget("/Empty")}>空页</span>
            </Menu.Item>
            <Menu.Item key="testMobx">
              <span onClick={() => jumpToTarget("/testMobx")}>调试mobx</span>
            </Menu.Item>
          </SubMenu>
            {/*
             <Menu.Item key="/home/Editorcell">
              <span onClick={() => jumpToTarget("/home/Editorcell">编辑单元格</span>
            </Menu.Item>
            
            */}
          </Menu>
        </div>
        <div className="content">
          <HashRouter>
            <Switch>
              {/* <Route path={`${match.path}/app`} component={Home} /> */}
              <Route path="/home/about" component={About} />
              <Route path="/home/teams" component={Teams} />
              <Route path="/home/BaseCenterOKR" component={BaseCenterOKR} />
              <Route path="/home/TestEnvTeamOKR" component={TestEnvTeamOKR} />
              <Route path="/home/TestEnvTeamOKR2" component={TestEnvTeamOKR2} />
              <Route path="/home/collapse" component={CollapseSelf} />

              <Route path="/home/multiRowForm" component={multiRowForm} />
              {/* <Route path="/home/list" component={List} />*/}

              <Route path="/home/editEdit" component={editEdit} />
              <Route path="/home/CRUD" component={CRUD} />
              <Route path="/home/EditorRow" component={Editorrow} />
              <Route path="/home/Editorcell" component={Editorcell} />
              <Route path="/login" component={Login} />
              <Route path="/Empty" component={Empty} />
              <Route path="/testMobx" component={testMobx} />
            </Switch>
          </HashRouter>
        </div>
      </div>
    </div>
  );
}

export default hot(Home);
