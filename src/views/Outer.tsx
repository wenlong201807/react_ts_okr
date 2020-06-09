import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Input, Button } from 'antd';
import history from '@/historys';
import { GetData } from '@/services/api/testGetData.ts';
// import _ from 'lodash';
// let array: any = [1];
// let other: any = _.concat(array, 2, [3], [[4]]);

// console.log(other);
// => [1, 2, 3, [4]]

// console.log(array);
// => [1]

// const loginBtn = () => {
//     console.log('登录');
// };
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
    </div>
  );
}

export default hot(Outer);
