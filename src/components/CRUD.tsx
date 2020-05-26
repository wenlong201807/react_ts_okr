import React from 'react';
import { hot } from 'react-hot-loader/root';
// import { Button } from 'antd';
import { EllipsisOutlined, UpOutlined } from '@ant-design/icons';
// import { Button } from 'antd';

// const loginBtn = () => {
//     console.log('登录');
// };
function CRUD() {
  return (
    <div className="CRUD">
      <h2>增删改查</h2>
      <div className="contentList">
        <div className="listTitle">
          <div className="objectTitle">
            <span className="objectTitleNum">O{1}:</span> {'row.headItem.head'}
          </div>
          <div className="objectWeight">权重：{'row.headItem.weight'}%</div>
          <div className="objectFinish">完成度：{'row.headItem.finish'}%</div>
          <div className="objectAdmin">负责人</div>
          <div className="objectIsAction">
            <EllipsisOutlined />
          </div>
          <div className="objectArrow">
            <UpOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default hot(CRUD);
