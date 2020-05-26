import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
// import { Button } from 'antd';
import { EllipsisOutlined, UpOutlined } from '@ant-design/icons';

import '@/styles/TestEnvTeam/TestEnvTeamMiddle.less';
function TestEnvTeamSecond(ThirdList: any) {
  console.log('ThirdList:', ThirdList);
  // console.log('TableList.objectArr:', TableList.objectArr);
  const [data, setData] = useState([]);

  const jump = () => {
    setData(data);
    console.log('jump:', data);
  };

  return (
    <div>
      {data.map((objItem, objIndex) => {
        console.log(objItem, objIndex);
        return (
          <div className="contentList" key={objIndex} onClick={() => jump}>
            <div className="listTitle">
              <div className="objectTitle">
                <span className="objectTitleNum">O{1}:</span> {'objItem.headItem.head'}
              </div>
              <div className="objectWeight">权重：{20}%</div>
              <div className="objectFinish">完成度：{10}%</div>
              <div className="objectAdmin">负责人</div>
              <div className="objectIsAction">
                <EllipsisOutlined />
              </div>
              <div className="objectArrow">
                <UpOutlined />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default hot(TestEnvTeamSecond);
