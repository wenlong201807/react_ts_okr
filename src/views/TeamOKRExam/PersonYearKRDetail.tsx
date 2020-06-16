import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Input, Button, Progress } from 'antd';
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
          <div className="subtitle_55">
            <span className="subtitle_third">年度KR2：</span> 测试环境绿灯雷达监测开发工作
          </div>
          <div className="small_15">年度KR权重</div>
          <div className="small_15">完成度</div>
          <div className="small_15">负责人</div>
        </div>

        <div className="content">
          <div className="subtitle_55 mr_third">
            <div className="small_fas_15">中心目标：实施平台化战略</div>
            <div className="small_fas_15">团队O1：配合智慧协同平台建设完成测试环境可视化展示</div>
            <div className="small_fas_15">
              ----个人O2：配合智慧协同平台，完成绿灯雷达的相关开发工作
            </div>
            <div className="small_fas_15">
              团队年度KR1：根据测试环境绿灯雷达监测，展示测试环境作战地图上各组件的应用健康检查情况
            </div>
          </div>
          <div className="small_15">20%</div>
          <div className="small_15 small_finish_15">
            <Progress percent={30} />
          </div>
          <div className="small_15 small_ad_15">张三</div>
        </div>
      </div>

      <div className="reasonKRDetailClaWrap">
        <div className="titleWhite"></div>
        <div className="reasonKRDetailTitle">
          <div className="headOne">季度KR详情</div>

          <span className="headRight">^</span>
        </div>
        <div className="reasonTitle">
          <div className="headTwo">
            <span className="blueDot"></span> 第一季度KR
          </div>
          <div className="reasonWeight">季度权重:100%</div>
          <div className="reasonFinish">完成度:60%</div>
          <div className="action">
            <span>...</span>
            <span className="headTwoRight">^</span>
          </div>
        </div>

        <div className="KRContentWrap">
          <div className="KR">
          <div>KR1：完成方案设计及实施计划制定</div>
          <div>团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
          </div>
          <div className="small_15">50%</div>
          <div className="small_15 small_finish_15">
          <Progress percent={30} /></div>
          <div className="small_15">kong</div>
        </div>
      </div>

      <Button onClick={getDaTA}>发请求</Button>
      <Input placeholder="1" value={val} style={{ width: '200px' }} onChange={(e) => dddd(e)} />
      <br />
    </div>
  );
}

export default hot(PersonYearKRDetail);
