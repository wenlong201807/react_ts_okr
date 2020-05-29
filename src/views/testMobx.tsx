import React, { useContext } from 'react';
// import stores from '@/moxstore/testStore';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Button } from 'antd';
import history from '@/historys';

import RootStoreContext from '@/moxstore/rootStroe/index'
// console.log(history);

// const loginBtn = () => {
//     console.log('登录');
// };
export default observer(function Empty() {
  const { testStore } = useContext(RootStoreContext);
  const {time} = testStore
 console.log('testStore',testStore)
  const jump = () => {
    console.log('跳转并传参');
  };
  const back = () => {
    console.log('back===go(-1)');
    history.go(-1);
  };
  const go = () => {
    console.log('go(-1)');
    history.go(1);
  };
  return (
    <div className="Empty">
      {/*  <p>{testStore.time}</p>*/}
        <p>{time}</p>
     
      <Link to="/home/collapse">折叠页</Link>

      <Button onClick={jump}>跳转并传参</Button>
      <Button onClick={go}>前进一页</Button>
      <Button onClick={back}>后退一页</Button>
      {/*
      <button onClick={() => arrStore.decreat(1)}>增加</button>
      <button onClick={() => arrStore.increa(1)}>减少</button>
      */}
      <Button onClick={() => testStore.decreat(1)}>增加1</Button>
      <Button onClick={() => testStore.increa(1)}>减少1</Button>
    </div>
  );
});

// export default hot(Empty);
