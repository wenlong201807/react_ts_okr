// import React, { useState } from 'react';
import React, { useState, useImperativeHandle } from 'react';
import { hot } from 'react-hot-loader/root';
import { Input, Button } from 'antd';

import '@/styles/TestEnvTeam/TestEnvTeamList.less';
function TestEnvTeamList(secondParentList) {
  // console.log('secondParentList.headItem.isAction:', secondParentList.headItem.isAction);
  // console.log('secondParentList.isEditList:', secondParentList.isEditList);
  // console.log('当前父组件的secondParentList所有:', secondParentList);
  console.log('secondParentList.list:', secondParentList.list);

  const [data, setData] = useState(secondParentList.list);
  const [isEditList, setEditList] = useState(false);
  // const [form] = Form.useForm();
  // console.log(data);
  // const cRef: any ;
  useImperativeHandle(secondParentList.cRef, () => ({
    // changeVal 就是暴露给父组件的方法
    changeVal: (newVal: any = '父调用子组件方法') => {
      console.log(newVal);
    },
    getFormValues: () => {
      // console.log('当前表格数据：', form.getFieldsValue());
      console.log('保存列表数据');
      saveTable();
    },
    enterEditKRsState: () => {
      console.log('进入编辑状态：');
      editall();
      // setData(data);
      // console.log('jump:', data);
      // console.log('isEditList:', isEditList);
      // setEditList(true);
    },
  }));

  const addOneKRs = () => {
    let index = data.length + 1;
    let obj: any = {
      content: '',
      id: index,
      isEditKRs: true,
      key: '1-1-2',
      myAction: '详情',
      myAdmin: '',
      myWeight: '',
      myFinish: '',
    };
    let newData = [...data, obj];
    setData(newData);
    console.log('添加一行');
  };

  const delOneKR = (index) => {
    console.log('删除index', index);
    data.splice(index, 1);
    let newData = [...data];
    setData(newData);
  };

  const getmyFinish = (value: string, index: number) => {
    console.log(value);
    let copydata = JSON.parse(JSON.stringify(data));
    copydata[index].myFinish = value;
    setData(copydata);
  };
  const getContent = (value: string, index: number) => {
    console.log(value);
    let copydata = JSON.parse(JSON.stringify(data));
    copydata[index].content = value;
    setData(copydata);
  };
  const getmyWeight = (value: string, index: number) => {
    console.log(value);
    let copydata = JSON.parse(JSON.stringify(data));
    copydata[index].myWeight = value;
    setData(copydata);
  };

  const saveRow = (id: number) => {
    let copydata = JSON.parse(JSON.stringify(data));
    let index = data.findIndex((item) => item.id === id);
    copydata[index] = Object.assign(copydata[index], {
      edit: false,
    });
    setData(copydata);
  };

  const saveTable: any = () => {
    let copydata = JSON.parse(JSON.stringify(data));
    copydata.forEach((item: any) => {
      item.isEditKRs = false;
    });
    setData(copydata);
    console.log(data);
  };
  const editall: any = () => {
    let copydata = JSON.parse(JSON.stringify(data));
    copydata.forEach((item: any, index: number) => {
      console.log(index);
      item.isEditKRs = true;
    });

    setData(copydata);
    // console.log(data)
  };

  const jump = () => {
    setData(data);
    console.log('jump:', data);
    console.log('isEditList:', isEditList);
    setEditList(true);
  };
  const jumpToTeamDetail = (row) => {
    console.log('团队年度KR详情', row);
    console.log('团队年666详情', secondParentList);
  };
  return (
    <div className="TestEnvTeamListCla">
      {data.map((item, ind) => {
        console.log('当前行内容item:', item, '是否可编辑:', item.isEditKRs);
        // let isEdit = isEditList;
        if (item.isEditKRs) {
          return (
            <div className="TestEnvTeamEditRow" key={ind}>
              <div  className="objectKRs">KR{ind+1}:</div>
              <Input
              className="objectTitle"
                placeholder="KRs"
                value={item.content}
                // style={{ width: '200px' }}
                onChange={(e) => getContent(e.target.value, ind)}
              />
              <Input
                className="objectWeight"
                placeholder="权重"
                value={item.myWeight}
                // style={{ width: '200px' }}
                onChange={(e) => getmyWeight(e.target.value, ind)}
              />
              <div  className="objectWeightPercent">%</div>
              <Input
                className="objectFinish"
                placeholder="完成度"
                value={item.myFinish}
                // style={{ width: '200px' }}
                onChange={(e) => getmyFinish(e.target.value, ind)}
              />
              <div  className="objectFinishPercent">%</div>
              <div className="objectAdmin" onClick={() => saveRow(item.id)}>
                {item.myAdmin}
              </div>
              <Button className="objectIsAction" onClick={() => delOneKR(ind)}>
                删除
              </Button>
            </div>
          );
        } else {
          return (
            <div className="TestEnvTeamListRow" key={ind}>
              <div className="objectTitle" onClick={() => jumpToTeamDetail(item)}>
                <span className="objectTitleNum">KP{ind + 1}:</span>
                {item.content}
              </div>
              <div className="objectWeight">{item.myWeight}</div>
              <div className="objectFinish">{item.myFinish}</div>
              <div className="objectAdmin">{item.myAdmin}</div>
              <div className="objectIsAction" onClick={jump}>
                详情
              </div>
            </div>
          );
        }
      })}

      <div className="addOneKRCla">
        <Button onClick={addOneKRs}>添加KR666</Button>
        <Button onClick={saveTable}>保存</Button>
        <Button onClick={editall}>全体编辑</Button>
      </div>
    </div>
  );
}

export default hot(TestEnvTeamList);
