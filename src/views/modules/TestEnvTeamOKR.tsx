import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Button } from 'antd';

import TestEnvTeamCollapse from '@/components/TestEnvTeam/TestEnvTeamCollapse';

function TestEnvTeamOKR() {
  const TestEnvTeamOKR: any = [
    {
      key: '1',
      id: 1,
      title: '实施平台化战略',
      objectArr: [
        {
          key: '1-1',
          id:11,
          headItem: {
            head: 'O1第一个',
            weight: '100%',
            finish: '56%',
            admin: '李雷',
            isAction: true,
          },
          list: [
            {
              id: 1,
              key: '1-1-1',
              content: 'woshineir1',
              myWeight: '30%',
              myFinish: '20%',
              myAdmin: '郭靖',
              myAction: '详情',
            },
            {
              id: 2,
              key: '1-1-2',
              content: 'woshineir2',
              myWeight: '50%',
              myFinish: '70%',
              myAdmin: '文',
              myAction: '详情',
            },
          ],
        },
        {
          key: '1-2',
          id:12,
          headItem: {
            head: 'O2第er个',
            weight: '90%',
            finish: '96%',
            admin: '景甜',
            isAction: true,
          },
          list: [
            {
              id: 1,
              key: '1-2-1',
              content: 'woshineir1',
              myWeight: '30%',
              myFinish: '20%',
              myAdmin: '朱允文',
              myAction: '详情',
            },
            {
              id: 2,
              key: '1-2-2',
              content: 'woshineir2',
              myWeight: '50%',
              myFinish: '70%',
              myAdmin: '文言文',
              myAction: '详情',
            },
          ],
        },
      ],
    },
    {
      key: '2',
      id: 2,
      title: '专业能力建设',
      objectArr: [
        {
          key: '2-1',
          id:21,
          headItem: {
            head: 'O1第一个',
            weight: '100%',
            finish: '56%',
            admin: '哪吒',
            isAction: false,
          },
          list: [
            {
              id: 1,
              key: '2-1-1',
              content: 'woshineir1',
              myWeight: '30%',
              myFinish: '20%',
              myAdmin: '朱',
              myAction: '详情',
            },
            {
              id: 2,
              key: '2-1-2',
              content: 'woshineir2',
              myWeight: '50%',
              myFinish: '70%',
              myAdmin: '文',
              myAction: '详情',
            },
          ],
        },
        {
          key: '2-2',
          id:22,
          headItem: {
            head: 'O2第er个',
            weight: '100%',
            finish: '56%',
            admin: '刘亦菲',
            isAction: true,
          },
          list: [
            {
              id: 1,
              key: '2-2-1',
              content: 'woshineir1',
              myWeight: '30%',
              myFinish: '20%',
              myAdmin: '朱',
              myAction: '详情',
            },
            {
              id: 2,
              key: '2-2-2',
              content: 'woshineir2',
              myWeight: '50%',
              myFinish: '70%',
              myAdmin: '文',
              myAction: '详情',
            },
          ],
        },
      ],
    },
  ];

  const [TestEnvTeamOKRData, setTestEnvTeamOKRData] = useState(TestEnvTeamOKR);

  const testHandle = () => {
    console.log(TestEnvTeamOKRData);
    let len = TestEnvTeamOKRData.length;
    console.log(len);

    setTestEnvTeamOKRData(TestEnvTeamOKRData);
  };

  return (
    <div className="TestEnvTeamOKRCla">
      <h2>
        测试环境团队OKR管理
        <Button type="primary" onClick={testHandle}>
          changZhu
        </Button>
      </h2>
      {TestEnvTeamOKRData.map((item,ind) => {
        return <TestEnvTeamCollapse key={ind} {...item}></TestEnvTeamCollapse>;
      })}
    </div>
  );
}

export default hot(TestEnvTeamOKR);
