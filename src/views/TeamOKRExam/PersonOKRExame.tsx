import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Input, Button } from 'antd';

import _ from 'lodash';
let array: any = [1];
let other: any = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]

// const loginBtn = () => {
//     console.log('登录');
// };
function PersonOKRExame() {
  const [val, setVal] = useState('');
  const dddd = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
  };

  const getDaTA = () => {
    console.log(66);
  };
  return (
    <div className="PersonOKRExame">
      <h2>王伟 OKR考核 - 第一季度</h2>
      <Button onClick={getDaTA}>发请求</Button>
      <Input placeholder="1" value={val} style={{ width: '200px' }} onChange={(e) => dddd(e)} />
      <br />
    </div>
  );
}

export default hot(PersonOKRExame);
