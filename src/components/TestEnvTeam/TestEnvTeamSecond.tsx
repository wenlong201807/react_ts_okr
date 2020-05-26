import React, { useState } from 'react';
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
  const [isEditObjList, setEditObjList] = useState(false);

  const isEditing = (record) => record.headItem.head === editingKey;
  const isEditObjListChange = (record) => record.headItem.isAction === isEditObjList;

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
      </Menu>
    );
  };

  // const onFinish = (values: any) => {
  //   console.log('Received values of form:', values);
  // };

  const editObjective = (objItem) => {
    // console.log('修改objective==objItem', objItem);
    let currentHead = objItem.headItem.head;
    // console.log('laoshi:', currentHead);
    setOldheadValue(currentHead);
    setEditingKey(currentHead);
  };

  const saveObject = (values: any, objItem: any) => {
    objItem.headItem.head = values.myHead;
    setEditingKey('');
    const newObjData = [...data];
    setData(newObjData);
  };

  const editObjList = (objItem) => {
    console.log('进入objItem编辑列表', objItem);
    objItem.headItem.isAction = true;
    const newObjData = [...data];
    // console.log('修改之后的isAction',newObjData)
    setData(newObjData);
  };
  const saveObjList = (objItem) => {
    console.log('进入objItem保存列表', objItem);
    objItem.headItem.isAction = false;
    const newObjData = [...data];
    // console.log('保存之后的isAction',newObjData)
    setData(newObjData);
    // setEditObjList(false);
    console.log('进入objItem修改之后',isEditObjList, objItem);
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
    console.log('AddNewObject', data);
    let len = data.length + 1;

    let NewObj = {
      key: len.toString(),
      id: len,
      headItem: {
        head: ``,
        weight: '100%',
        finish: '0%',
        admin: '负责人',
        isAction: true,
      },
      list: [],
    };

    data.push(NewObj);
    const newObjData = [...data];
    setData(newObjData);
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
                <div className="objectInput">
                  <Form
                    name="normal_login"
                    // className="login-form"
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
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        保存
                      </Button>
                    </Form.Item>
                  </Form>
                </div>

                <div className="objectDel">
                  <Button onClick={() => delObject(objItem)}>删除</Button>
                </div>
              </div>
              <TestEnvTeamList isEditList={false} key={objIndex} {...objItem}></TestEnvTeamList>
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
                {/*
              是否可编辑子列表的内容
  
              */}
                <TestEnvTeamList isEditList={false} key={objIndex} {...objItem}></TestEnvTeamList>
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
                      保存
                    </Button>
                  </div>
                  <div className="objectArrow"></div>
                </div>
                {/*
              是否可编辑子列表的内容
  
              */}
                <TestEnvTeamList isEditList={true} key={objIndex} {...objItem}></TestEnvTeamList>
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
