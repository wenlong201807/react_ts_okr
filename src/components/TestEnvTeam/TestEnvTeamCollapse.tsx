import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import '@/styles/TestEnvTeam/TestEnvTeamCollapse.less';

import { Collapse } from 'antd';
// import { SettingOutlined } from '@ant-design/icons';
import { PlusCircleOutlined, SendOutlined } from '@ant-design/icons';
// import AddBtn from '@/components/child/AddBtn'
import TestEnvTeamTable from '@/components/TestEnvTeam/TestEnvTeamTable';
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const myHead = (row) => {
  // console.log('折叠面板表头内容：',row)
  return (
    <div className="collapseHeaderCla">
      <div>{row.headItem.head}</div>
      <div>权重：{row.headItem.weight}%</div>
      <div>完成度：{row.headItem.finish}%</div>
      <div>{row.headItem.admin}</div>
      <div>{row.headItem.isAction ? '编辑' : '查看'}</div>
    </div>
  );
};

const TestEnvTeamCollapse = (parentObejct: any) => {
  // console.log('parentObejct:',parentObejct.objectArr)
  // console.log('parentObejct:',parentObejct)

  const CollapseList: any = [
    {
      key: '1',
      id: 1,
      headItem: { head: '第一个', weight: '100%', finish: '56%', admin: '李雷', isAction: true },
      list: [
        {
          id: 1,
          key: '1',
          content: 'woshineir1',
          myWeight: '30%',
          myFinish: '20%',
          myAdmin: '朱',
          myAction: '详情',
        },
        {
          id: 2,
          key: '2',
          content: 'woshineir2',
          myWeight: '50%',
          myFinish: '70%',
          myAdmin: '文',
          myAction: '详情',
        },
      ],
    },
    {
      key: '2',
      id: 2,
      headItem: {
        head: '第一hg个',
        weight: '10%',
        finish: '86%',
        admin: '李jing',
        isAction: false,
      },
      list: [
        {
          id: 1,
          key: '1',
          content: 'woshineir1',
          myWeight: '30%',
          myFinish: '20%',
          myAdmin: '朱',
          myAction: '详情',
        },
        {
          id: 2,
          key: '2',
          content: 'woshineir2',
          myWeight: '50%',
          myFinish: '70%',
          myAdmin: '文',
          myAction: '详情',
        },
      ],
    },
  ];
  console.log('数据格式：', CollapseList);

  const [CollapseListData, setCollapseListData] = useState(parentObejct.objectArr);
  // const [CollapseListData, setCollapseListData] = useState(CollapseList);

  const addOneCollapse = () => {
    console.log(66);
    let Len = CollapseListData[CollapseListData.length - 1].list.length + 1;
    console.log(CollapseListData[CollapseListData.length - 1]);
    let obj = {
      key: Len.toString(),
      id: Len,
      headItem: {
        head: `O${Len}：dsaf`,
        weight: '10%',
        finish: '86%',
        admin: '李jing',
        isAction: true,
      },
    };
    // useEffect(() => {
    const newCollapseListData = [...CollapseListData];
    newCollapseListData.push(obj);
    //   return () => {
    setCollapseListData(newCollapseListData);
    //   }
    // }, [CollapseListData])

    console.log(CollapseListData);
  };
  return (
    <div className="DefinedCollapseContainer">
      <div className="objectTypeCla">
        <SendOutlined />
        <span className="objectTypeTitle">{parentObejct.title}</span>{' '}
      </div>
      <Collapse
        defaultActiveKey={['1']}
        onChange={callback}
        bordered={false}
        expandIconPosition={'right'}
      >
        {CollapseListData.map((item) => {
          return (
            <Panel header={myHead(item)} key={item.key}>
              <TestEnvTeamTable key={item.key} {...item}></TestEnvTeamTable>
            </Panel>
          );
        })}
      </Collapse>
      <div className="addOneBtnCla" onClick={() => addOneCollapse()}>
        <PlusCircleOutlined></PlusCircleOutlined>
        <span className="addTargetCla">添加Objective</span>
      </div>
      {/*      
        <AddBtn addOneCollapse={addOneCollapse}/>
      */}
    </div>
  );
};

export default hot(TestEnvTeamCollapse);
