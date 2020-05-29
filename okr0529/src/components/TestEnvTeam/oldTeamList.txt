// import React, { useState } from 'react';
import React, { useState, useImperativeHandle } from 'react';
import { hot } from 'react-hot-loader/root';
import { Form, Input, Button } from 'antd';

import '@/styles/TestEnvTeam/TestEnvTeamList.less';
function TestEnvTeamList(secondParentList) {
  // console.log('secondParentList.headItem.isAction:', secondParentList.headItem.isAction);
  // console.log('secondParentList.isEditList:', secondParentList.isEditList);
  // console.log('当前父组件的secondParentList所有:', secondParentList);
  console.log('secondParentList.list:', secondParentList.list);

  const [data, setData] = useState(secondParentList.list);
  const [isEditList, setEditList] = useState(false);
  const [form] = Form.useForm();
  // console.log(data);
  // const cRef: any ;
  useImperativeHandle(secondParentList.cRef, () => ({
    // changeVal 就是暴露给父组件的方法
    changeVal: (newVal: any = '父调用子组件方法') => {
      console.log(newVal);
    },
    getFormValues: () => {
      console.log('当前表格数据：', form.getFieldsValue());
    },
    enterEditKRsState: () => {
      console.log('进入编辑状态：');
      // setData(data);
      // console.log('jump:', data);
      // console.log('isEditList:', isEditList);
      // setEditList(true);
    },
  }));

  const saveKRs = (v, item) => {
    console.log('保存KRs', v, item);
  };

  const addOneKRs = () => {
    let index = data.length + 1;
    let obj: any = {
      content: '',
      id: index,
      isEditKRs: true,
      key: '1-1-2',
      myAction: '详情',
      myAdmin: '',
      myFinish: '',
      myWeight: '',
    };
    let newData = [...data, obj];
    setData(newData);
    console.log('添加一行');
  };

  const delOneKR = (index) => {
    console.log('删除index', index);
    data.splice(index,1)
    let newData = [...data]
    setData(newData)
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
              <Form
                name="normal_login"
                form={form}
                // className="login-form"
                // initialValues={{ remember: true }}
                onFinish={(v) => saveKRs(v, item)}
                layout="inline"
              >
                <Form.Item
                  label={'KR' + (ind + 1)}
                  name={'content-' + ind}
                  initialValue={item.content}
                  rules={[{ required: true, message: '大O不能为空' }]}
                >
                  <Input placeholder="Objective" />
                </Form.Item>
                <Form.Item
                  label={'权重'}
                  name={'myWeight-' + ind}
                  initialValue={item.myWeight}
                  rules={[{ required: true, message: '权重不能为空' }]}
                >
                  <Input placeholder="myWeight" />
                </Form.Item>
                <Form.Item
                  label={'完成度'}
                  name={'myFinish-' + ind}
                  initialValue={item.myFinish}
                  rules={[{ required: true, message: '完成度不能为空' }]}
                >
                  <Input placeholder="myFinish" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    保存888
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => delOneKR(ind)}
                    className="login-form-button"
                  >
                    删除
                  </Button>
                </Form.Item>
              </Form>
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

      <div className="addOneKRCla" onClick={addOneKRs}>
        添加KR666
      </div>
    </div>
  );
}

export default hot(TestEnvTeamList);


/*
页面不更更新
*/