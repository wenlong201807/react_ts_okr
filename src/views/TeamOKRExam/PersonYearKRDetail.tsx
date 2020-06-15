import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Input, Button } from 'antd';
import { LeftOutlined, CloseOutlined } from '@ant-design/icons';
import history from '@/historys';
import { GetData } from '@/services/api/testGetData.ts';
import '@/styles/TeamOKRExam/PersonYearKRDetail.less';

function PersonYearKRDetail() {
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

  const jumpToMyOKR = (key) => {
    console.log('key:', key);
    history.push('/home/TestEnvTeamOKR');
  };
  return (
    <div className="PersonYearKRDetailWrap">
      <div className="topNav">
        <div>
          <LeftOutlined onClick={() => jumpToMyOKR('1')} />
          <span className="title">个人年度KR详情</span>
        </div>
        <div>
          <CloseOutlined />
        </div>
      </div>

      <div className="yearRelative">
        <div className="title">
          <div className="subtitle_55">年度KR2：测试环境绿灯雷达监测开发工作</div>
          <div className="small_15">年度KR权重</div>
          <div className="small_15">完成度</div>
          <div className="small_15">负责人</div>
        </div>
      </div>

      <Button onClick={getDaTA}>发请求</Button>
      <Input placeholder="1" value={val} style={{ width: '200px' }} onChange={(e) => dddd(e)} />
      <br />
    </div>
  );
}

export default hot(PersonYearKRDetail);
