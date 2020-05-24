import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import '../styles/reflect/DefinedCollapse.less';

import { Collapse } from 'antd';
// import { SettingOutlined } from '@ant-design/icons';
import { PlusCircleOutlined,SendOutlined  } from '@ant-design/icons';
// import AddBtn from '@/components/child/AddBtn'
import TestEnvTeamTable from '@/components/child/TestEnvTeamTable';
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}



const myHead = (row) => {
  return (
    <div className="collapseHeaderCla">
      <div>O{row.id}：配合智慧协同平台建设完成测试环境可视化展示</div>
      <div>权重：100%{row.headItem.head}</div>
      <div>完成度：56%</div>
      <div>负责人</div>
      <div>操作</div>
    </div>
  );
};

const DefinedCollapse = () => {
  const CollapseList: any = [
    {
      key: '1',
      id: 1,
      headItem: { head: '第一个', weight: '100%', finish: '56%', admin: '李雷', isAction: true },
    },
    {
      key: '2',
      id: 2,
      headItem: { head: '第一hg个', weight: '10%', finish: '86%', admin: '李jing', isAction: true },
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

  const [CollapseListData, setCollapseListData] = useState(CollapseList);

  const addOneCollapse = () => {
    console.log(66);
    let nextId = CollapseListData[CollapseListData.length - 1].id + 1;

    let obj = {
      key: nextId.toString(),
      id: nextId,
      headItem: {
        head: `第${nextId}个`,
        weight: '10%',
        finish: '86%',
        admin: '李jing',
        isAction: true,
      },
    };

    const newCollapseListData = [...CollapseListData];
    newCollapseListData.push(obj);
    setCollapseListData(newCollapseListData);
  };
  return (
    <div className="DefinedCollapseContainer">
      <div className="objectTypeCla"><SendOutlined /><span className="objectTypeTitle">实施平台化战略</span> </div>
      <Collapse
        defaultActiveKey={['1']}
        onChange={callback}
        bordered={false}
        expandIconPosition={'right'}
      >
        {CollapseListData.map((item) => {
          return (
            <Panel header={myHead(item)} key={item.key}>
              <TestEnvTeamTable {...item}></TestEnvTeamTable>
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

export default hot(DefinedCollapse);
