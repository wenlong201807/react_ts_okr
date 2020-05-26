import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Link, Route, Switch } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

import '../styles/reflect/home.less';
import About from './About';
import Teams from './modules/Teams';
import BaseCenterOKR from './modules/BaseCenterOKR';
import TestEnvTeamOKR from './modules/TestEnvTeamOKR';
import TestEnvTeamOKR2 from './modules/TestEnvTeamOKR2';
import Login from './Login';
import CollapseSelf from '../components/collapse';
import List from '../components/List';
import Editorrow from '../components/EditorRow';
import Editorcell from '../components/Editorcell';

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
            <Menu.Item key="1">我的OKR</Menu.Item>

            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="团队OKR">
              <Menu.Item key="/home/TestEnvTeamOKR">
                <Link to="/home/TestEnvTeamOKR">测试环境团队</Link>
              </Menu.Item>
              <Menu.Item key="/home/TestEnvTeamOKR2">
                <Link to="/home/TestEnvTeamOKR2">测试环境团队2</Link>
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
              <Link to="/home/BaseCenterOKR">中心OKR基线</Link>
            </Menu.Item>
            <SubMenu key="sub5" icon={<AppstoreOutlined />} title="测试中...">
              <Menu.Item key="/home/about">
                <Link to="/home/about">自我测试</Link>
              </Menu.Item>

              <Menu.Item key="/home/teams">
                <Link to="/home/teams">测试环境团队</Link>
              </Menu.Item>
              <Menu.Item key="/home/collapse">
                <Link to="/home/collapse">折叠面板(共用的)</Link>
              </Menu.Item>

              <Menu.Item key="/home/list">
                <Link to="/home/list">列表</Link>
              </Menu.Item>
              <Menu.Item key="/home/EditorRow">
                <Link to="/home/EditorRow">单行全编辑</Link>
              </Menu.Item>
              <Menu.Item key="/home/Editorcell">
                <Link to="/home/Editorcell">编辑单元格</Link>
              </Menu.Item>
              <Menu.Item key="login">
                <Link to="/login">登录</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className="content">
          <Switch>
            {/* <Route path={`${match.path}/app`} component={Home} /> */}
            <Route path="/home/about" component={About} />
            <Route path="/home/teams" component={Teams} />
            <Route path="/home/BaseCenterOKR" component={BaseCenterOKR} />
            <Route path="/home/TestEnvTeamOKR" component={TestEnvTeamOKR} />
            <Route path="/home/TestEnvTeamOKR2" component={TestEnvTeamOKR2} />
            <Route path="/home/collapse" component={CollapseSelf} />

            <Route path="/home/list" component={List} />
            <Route path="/home/EditorRow" component={Editorrow} />
            <Route path="/home/Editorcell" component={Editorcell} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default hot(Home);
