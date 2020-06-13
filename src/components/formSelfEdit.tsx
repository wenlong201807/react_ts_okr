// import React from 'react';
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

import '@/styles/test/formSelfEdit.less';

// const layout = {
//   labelCol: { span: 2 },
//   wrapperCol: { span: 4 },
// };

const formSelfEdit = () => {
  const dynamicArr = [{ key: 1, KRContent: '', weight: '', finished: '' }];
  const [form] = Form.useForm();
  const [dArr, setDArr] = useState(dynamicArr);
  const [editingKey, setEditingKey] = useState('edit'); // 空字符串为不可编辑，'edit' 为编辑

  const addOneInput = () => {
    console.log('addOneInput');
    let lastKey: any = 0;
    let obj: any = {};
    if (dArr.length) {
      lastKey = dArr[dArr.length - 1].key + 1;
      obj = { key: lastKey, KRContent: '', weight: '', finished: '' };
    } else {
      obj = { key: 1, KRContent: '', weight: '', finished: '' };
    }

    dArr.push(obj);
    const newArr = [...dArr];
    setDArr(newArr);
  };

  const DelOne = (index) => {
    console.log(index);
    let DelInd = dArr.findIndex((val) => val.key == index);
    dArr.splice(DelInd, 1);
    const newArr = [...dArr];
    setDArr(newArr);
  };

  const onFinish = (values: any) => {
    console.log(values);
    let updateArr: any = [];
    let valueArr: any = Object.entries(values);
    let len = valueArr.length;
    let rowNumber = Math.floor(len / 3);
    for (let i = 0; i < rowNumber; i++) {
      updateArr.push({});
    }
    console.log(updateArr, len, rowNumber, valueArr);
    let j = 0;
    while (j < len) {
      // console.log(valueArr[j]);
      let Unionkey = valueArr[j][0].split('-')[1];
      let key = valueArr[j][0].split('-')[0];
      let value = valueArr[j][1];
      console.log('每一行的内容:', Unionkey, key, value);
      updateArr[Math.floor(j / 3)][key] = value;
      updateArr[Math.floor(j / 3)]['key'] = Number(Unionkey);
      j++;
    }
    console.log('updateArr', updateArr);
    const newArr = [...updateArr];
    setDArr(newArr);
    setEditingKey(''); // bu可编辑状态
  };

  const getAllFormValue = async () => {
    console.log('获取所有内容', form);
    try {
      let rowData: any = await form.validateFields();
      console.log('form.validateFields(),返回当前行数据:', rowData);
      onFinish(rowData);
    } catch (errInfo) {
      console.log('需要填写完整才能提交:', errInfo);
    }
  };

  const isEdit = () => {
    console.log('是否编辑');
    setEditingKey('edit'); // 可编辑状态
  };

  if (editingKey) {
    return (
      <div>
        {/*  <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>  */}
        <Form form={form} name="control-hooks" onFinish={onFinish}>
          {dArr.map((item) => {
            return (
              <div key={item.key} className="editListClaWrap">
                <Form.Item noStyle shouldUpdate>
                  {() => {
                    return (
                      <Form.Item
                        className="editKRCla"
                        name={'KRContent-' + item.key}
                        label={'KR' + item.key}
                        rules={[{ required: true, message: `KR${item.key}不能为空` }]}
                        initialValue={item.KRContent}
                      >
                        <Input />
                      </Form.Item>
                    );
                  }}
                </Form.Item>
                <Form.Item noStyle shouldUpdate>
                  {() => {
                    return (
                      <Form.Item
                        className="editweightCla"
                        name={'weight-' + item.key}
                        label={'权重' + item.key}
                        rules={[{ required: true, message: `权重不能为空` }]}
                        initialValue={item.weight}
                      >
                        <Input />
                      </Form.Item>
                    );
                  }}
                </Form.Item>
                <Form.Item noStyle shouldUpdate>
                  {() => {
                    return (
                      <Form.Item
                        className="editfinishedCla"
                        name={'finished-' + item.key}
                        label={'完成度' + item.key}
                        rules={[{ required: true, message: `完成度不能为空` }]}
                        initialValue={item.finished}
                      >
                        <Input />
                      </Form.Item>
                    );
                  }}
                </Form.Item>
                <div className="editDelCla">
                  <Button htmlType="button" onClick={() => DelOne(item.key)}>
                    删除{item.key}
                  </Button>
                </div>
                <hr />
              </div>
            );
          })}
        </Form>

        <Button onClick={addOneInput}>添加一个input</Button>
        <Button onClick={getAllFormValue}>完成</Button>
      </div>
    );
  } else {
    return (
      <div>
        <Button onClick={isEdit}>进入编辑状态</Button>
        {dArr.map((item) => {
          return (
            <div key={item.key} className="ListClaWrap">
              <div className="KRCla">
                <span className="KRClaTitle"> {'KR' + item.key}:</span>
                {item.KRContent}
              </div>
              <div className="weightCla">权重:{item.weight}</div>
              <div className="finishedCla">完成度:{item.weight}</div>
              <div className="DelCla">完成度:{item.weight}</div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default formSelfEdit;
