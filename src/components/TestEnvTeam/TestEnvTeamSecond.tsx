import React, { useState, useRef } from 'react';
import { hot } from 'react-hot-loader/root';
import { Form, Menu, Dropdown, Input, Button } from 'antd';
// import { Button ,Menu, Dropdown } from 'antd';
import { EllipsisOutlined, UpOutlined } from '@ant-design/icons';

import TestEnvTeamList from '@/components/TestEnvTeam/TestEnvTeamList';
import '@/styles/TestEnvTeam/TestEnvTeamSecond.less';

function TestEnvTeamSecond(TableList: any) {
  // console.log('TableList:', TableList);
  // console.log('TableList.objectArr:', TableList.objectArr);

  const [data, setData] = useState(TableList.objectArr);
  const [editingKey, setEditingKey] = useState('');
  const [oldheadValue, setOldheadValue] = useState('');
  const [isEditObjList, setEditObjList] = useState(false); // 当前数据如果要编辑，将对应内容设置为true
  const childRef: any = useRef();

  const isEditing = (record) => record.headItem.head === editingKey;
  const isEditObjListChange = (record) => record.headItem.isEditKRs === isEditObjList;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 15 },
      sm: { span: 12 },
    },
  };
  const jump = () => {
    setData(data);
    console.log('jump:', data);
    setEditingKey('');
    // setHeadValue('');
    setEditObjList(true);
  };

  const menu = (objItem) => {
    return (
      <Menu>
        <Menu.Item onClick={() => editObjective(objItem)}> 修改Objective</Menu.Item>
        <Menu.Item onClick={() => delObject(objItem)}>删除Objective</Menu.Item>
        <Menu.Item onClick={() => editObjList(objItem)}>修改KPIs</Menu.Item>
        <Menu.Item onClick={() => pToC(objItem)}>test</Menu.Item>
      </Menu>
    );
  };

  // const onFinish = (values: any) => {
  //   console.log('Received values of form:', values);
  // };
  const pToC = (objItem) => {
    console.log(objItem);
    // setEditingKey('');
    // // setHeadValue('');
    // setEditObjList(true);
    // childRef.current.enterEditKRsState();
    // childRef.current.changeVal();

    // childRef.current.getFormValues();
  };

  const editObjective = (objItem) => {
    let currentHead = objItem.headItem.head;
    setOldheadValue(currentHead);
    setEditingKey(currentHead);
  };

  const saveObject = (values: any, objItem: any) => {
    objItem.headItem.head = values.myHead;
    const newObjData = [...data];
    setData(newObjData);
    setEditingKey('');
  };

  const editObjList = (objItem) => {
    // KRs 进入编辑状态时，表头时不可编辑的，并且设置当前KRs 列表为可编辑状态
    setEditingKey(''); // 1.表头时不可编辑的
    console.log('进入objItem编辑列表', objItem);
    objItem.headItem.isEditKRs = true; // 2.并且设置当前KRs 表头切换成可编辑的保存按钮
    // 3.将列表中的编辑列表状态设置成true enterEditKRsState
    //  childRef.current.enterEditKRsState();
    objItem.list.forEach((item) => {
      item.isEditKRs = true;
    });
    const newObjData = [...data];
    // console.log('修改之后的isAction',newObjData)
    setData(newObjData);
  };
  const saveObjList = (objItem) => {
    setEditingKey(''); // 1.表头时不可编辑的
    objItem.headItem.isEditKRs = false; // 2.并且设置当前KRs 列表为不可编辑状态

    childRef.current.getFormValues(); // 3.获取编辑之后的input数据

    // 4.将列表中的编辑列表状态设置成true
    objItem.list.forEach((item) => {
      item.isEditKRs = false;
    });
    const newObjData = [...data];
    // console.log('保存之后的isAction',newObjData)
    setData(newObjData);
    // setEditObjList(false);
    // console.log('进入objItem修改之后', isEditObjList, objItem);
  };
  const delObject = (objItem) => {
    console.log('删除objective==objItem', objItem);

    const newObjData = [...data];
    const index = newObjData.findIndex((item) => objItem.id === item.id);
    newObjData.splice(index, 1);
    setData(newObjData);
    setEditingKey('');
  };

  const AddNewObject = () => {
    let len = data.length + 1;
    let NewObj = {
      key: len.toString(),
      id: len,
      headItem: {
        head: ``,
        weight: '100%',
        finish: '0%',
        admin: '负责人',
        isEditObjHead: false,
        isEditKRs: false,
        isExpandKRsList: false,
      },
      list: [],
    };

    data.push(NewObj);
    const newObjData = [...data];
    setData(newObjData);
    setEditingKey(''); // 进入编辑状态
    setOldheadValue(''); // 清空原有数据
  };

  return (
    <div className="testEnvSecondWrap">
      {data.map((objItem, objIndex) => {
        // console.log('当前的objItem', objItem, isEditing(objItem));
        if (isEditing(objItem)) {
          return (
            <div className="contentEdit" key={objIndex} onClick={() => jump}>
              <div className="listTitle">
                <div className="objectOrder">O{objIndex + 1}:</div>
                <div className="formWrap">
                  <Form
                    // name="normal_login"
                    {...formItemLayout}
                    // initialValues={{ remember: true }}
                    onFinish={(v) => saveObject(v, objItem)}
                    layout="inline"
                  >
                    <Form.Item
                      name="myHead"
                      initialValue={oldheadValue}
                      rules={[{ required: true, message: '大O不能为空' }]}
                    >
                      <Input placeholder="Objective" />
                    </Form.Item>
                    <Form.Item>
                      <Button className="objectInputBtn" type="primary" htmlType="submit">
                        保存6
                      </Button>
                    </Form.Item>
                  </Form>
                </div>

                <div className="objectDel">
                  <Button onClick={() => delObject(objItem)}>删除7</Button>
                </div>
              </div>
              <TestEnvTeamList cRef={childRef} key={objIndex} {...objItem}></TestEnvTeamList>
            </div>
          );
        } else {
          // let isEditList = true;
          if (isEditObjListChange(objItem)) {
            return (
              <div className="contentList" key={objIndex} onClick={() => jump}>
                <div className="listTitle">
                  <div className="objectTitle">
                    <span className="objectTitleNum">O{objIndex + 1}:</span> {objItem.headItem.head}
                  </div>
                  <div className="objectWeight">权重：{objItem.headItem.weight}%</div>
                  <div className="objectFinish">完成度：{objItem.headItem.finish}%</div>
                  <div className="objectAdmin">负责人</div>
                  <div className="objectIsAction">
                    <Dropdown overlay={() => menu(objItem)}>
                      <EllipsisOutlined />
                    </Dropdown>
                  </div>
                  <div className="objectArrow">
                    <UpOutlined />
                  </div>
                </div>
                <TestEnvTeamList cRef={childRef} key={objIndex} {...objItem}></TestEnvTeamList>
              </div>
            );
          } else {
            return (
              <div className="contentList" key={objIndex} onClick={() => jump}>
                <div className="listTitle">
                  <div className="objectTitle">
                    <span className="objectTitleNum">O{objIndex + 1}:</span> {objItem.headItem.head}
                  </div>
                  <div className="objectWeight">权重：{objItem.headItem.weight}%</div>
                  <div className="objectFinish">完成度：{objItem.headItem.finish}%</div>
                  <div className="objectAdmin"></div>
                  <div className="objectIsAction">
                    <Button type="primary" onClick={() => saveObjList(objItem)}>
                      保存5KRs
                    </Button>
                  </div>
                  <div className="objectArrow"></div>
                </div>
                <TestEnvTeamList cRef={childRef} key={objIndex} {...objItem}></TestEnvTeamList>
              </div>
            );
          }
        }
      })}
      <div className="addOneContentCla" onClick={() => AddNewObject()}>
        添加O的按钮
      </div>
    </div>
  );
}

export default hot(TestEnvTeamSecond);
