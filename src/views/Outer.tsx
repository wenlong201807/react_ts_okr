import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Input, Button } from 'antd';
import history from '@/historys';
import { GetData } from '@/services/api/testGetData.ts';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import '@/views/Outer.less';
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const stopDefault = (e) => {
  e.stopPropagation();
  console.log('组织默认行为');
};

const genExtra = () => (
  <div className="extraCla" onClick={(e) => stopDefault(e)}>
    <div className="selfHead">666</div>

    <div className="arrowCla">箭头</div>
  </div>

  // return (
  //   <div>
  //   <h1>sdf</h1>
  //   </div>
  // )
);

const jumpToTarget = () => {
  history.push('/home/TestEnvTeamOKR2');
};
function Outer() {
  const [val, setVal] = useState('');
  const dddd = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
  };

  const getDaTA = () => {
    const param = {};
    GetData(param).then((res: any) => {
      console.log(res);
    });
  };
  return (
    <div className="Outer">
      <h2>我是与home同济 的</h2>
      <Button onClick={getDaTA}>发请求</Button>
      <Button onClick={jumpToTarget}>跳转到团队OKR页面</Button>
      <Input placeholder="1" value={val} style={{ width: '200px' }} onChange={(e) => dddd(e)} />
      <br />
      <Collapse
        bordered={true}
        defaultActiveKey={['1']}
        onChange={callback}
        expandIconPosition={'right'}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        className="site-collapse-custom-collapse"
      >
        <Panel header={genExtra()} key="1" className="site-collapse-custom-panel">
          <div>{text}</div>
        </Panel>
        <Panel header={genExtra()} key="2" className="site-collapse-custom-panel">
          <div>{text}</div>
        </Panel>
        <Panel header={genExtra()} key="3" className="site-collapse-custom-panel">
          <div>{text}</div>
        </Panel>
        {/*  
         <Panel header="" key="3" style={customPanelStyle} extra={genExtra()}>
          <div>{text}</div>
        </Panel>
        */}
      </Collapse>
    </div>
  );
}

export default hot(Outer);
