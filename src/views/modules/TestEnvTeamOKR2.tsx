import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
// import { PlusOutlined, EllipsisOutlined, UpOutlined } from '@ant-design/icons';
import '@/styles/reflect/TestEnvTeamOKR2.less';
import TestEnvTeamSecond from '@/components/TestEnvTeam/TestEnvTeamSecond';

function TestEnvTeamOKR2() {
  const TestEnvTeamOKR: any = [
    {
      key: '1',
      id: 1,
      title: '实施平台化战略',
      objectArr: [
        {
          key: '1-1',
          id: 11,
          headItem: {
            head: 'O1第一个',
            weight: '100%',
            finish: '56%',
            admin: '李雷',
            isEditObjHead: false,
            isEditKRs: false,
            isExpandKRsList: false,
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
              isEditKRs: false,
            },
            {
              id: 2,
              key: '1-1-2',
              content: 'woshineir2',
              myWeight: '50%',
              myFinish: '70%',
              myAdmin: '文',
              myAction: '详情',
              isEditKRs: false,
            },
          ],
        },
        {
          key: '1-2',
          id: 12,
          headItem: {
            head: 'O2第er个',
            weight: '90%',
            finish: '96%',
            admin: '景甜',
            isEditObjHead: false,
            isEditKRs: false,
            isExpandKRsList: false,
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
              isEditKRs: false,
            },
            {
              id: 2,
              key: '1-2-2',
              content: 'woshineir2',
              myWeight: '50%',
              myFinish: '70%',
              myAdmin: '文言文',
              myAction: '详情',
              isEditKRs: false,
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
          id: 21,
          headItem: {
            head: 'O1第一个',
            weight: '100%',
            finish: '56%',
            admin: '哪吒',
            isEditObjHead: false,
            isEditKRs: false,
            isExpandKRsList: false,
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
              isEditKRs: false,
            },
            {
              id: 2,
              key: '2-1-2',
              content: 'woshineir2',
              myWeight: '50%',
              myFinish: '70%',
              myAdmin: '文',
              myAction: '详情',
              isEditKRs: false,
            },
          ],
        },
        {
          key: '2-2',
          id: 22,
          headItem: {
            head: 'O2第er个',
            weight: '100%',
            finish: '56%',
            admin: '刘亦菲',
            isEditObjHead: false,
            isEditKRs: false,
            isExpandKRsList: false,
          },
          list: [
            {
              id: 1,
              key: '2-2-1',
              content: 'woshineir1',
              myWeight: '30%',
              myFinish: '20%',
              myAdmin: '朱之歌',
              myAction: '详情',
              isEditKRs: false,
            },
            {
              id: 2,
              key: '2-2-2',
              content: 'woshineir2',
              myWeight: '50%',
              myFinish: '70%',
              myAdmin: '文话',
              myAction: '详情',
              isEditKRs: false,
            },
          ],
        },
      ],
    },
  ];

  const [TestEnvTeamOKRData, setTestEnvTeamOKRData] = useState(TestEnvTeamOKR);

  const kk = () => {
    let list = [
      {
        title: 'dsf',
      },
      {
        title: 'fhgmjfhgm',
      },
    ];
    setTestEnvTeamOKRData(list);
  };
  return (
    <div className="TestEnvTeamOKR2Cla">
      <div className="titleWrap">
        <h2>测试环境团队OKR管理</h2>
        <div className="leftBtn">
          <div>
            日历 <PlusOutlined />
          </div>
          <div>
            <Button onClick={() => kk()}>导出</Button>
          </div>
        </div>
      </div>
      {TestEnvTeamOKRData.map((item, index) => {
        // console.log('item.objectArr:', item.objectArr);
        return (
          <div className="contentWrap" key={index}>
            <div className="ObjectTitle">
              <PlusOutlined />
              <span className="title">{item.title}</span>
            </div>
            <TestEnvTeamSecond {...item}></TestEnvTeamSecond>
          </div>
        );
      })}
    </div>
  );
}

export default hot(TestEnvTeamOKR2);
