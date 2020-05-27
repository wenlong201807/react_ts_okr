import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Input } from 'antd';

// const loginBtn = () => {
//     console.log('登录');
// };
function Empty() {
  const [val, setVal] = useState('');
  const dddd = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
  };
  return (
    <div className="Empty">
      <h2>我是错误页面</h2>
      <Input placeholder="1" value={val} style={{ width: '200px' }} onChange={(e) => dddd(e)} />
      <br />
    </div>
  );
}

export default hot(Empty) ;
