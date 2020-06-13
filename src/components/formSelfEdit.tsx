// import React from 'react';
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

import '@/styles/test/formSelfEdit.less';

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const formSelfEdit = () => {
  const dynamicArr = [{ key: 1, KRContent: '', weight: '', finished: '' }];
  const [form] = Form.useForm();
  const [dArr, setDArr] = useState(dynamicArr);
  const [editingKey, setEditingKey] = useState(''); // 空字符串为不可编辑，'edit' 为编辑

  // const isEditing = (record) => record.headItem.head === editingKey;
  // const [CurrentList, setCurrentList] = useState([]);
  // console.log('editingKey:', editingKey);

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

      // let rowObj = {
      //   [key]: value,
      // };
      if (j % 3 == 0) {
        // updateArr[Unionkey - 1]['key'] = Number(Unionkey);
        console.log('当前索引:', Number(Unionkey));
      }
      updateArr[Math.floor(j / 3)][key] = value;
      updateArr[Math.floor(j / 3)]['key'] = Number(Unionkey);
      j++;
    }
    console.log('updateArr', updateArr);
    const newArr = [...updateArr];
    setDArr(newArr);
    setEditingKey(''); // bu可编辑状态
  };

  const onReset = () => {
    form.resetFields();
  };

  const isEdit = () => {
    console.log('是否编辑');
    setEditingKey('edit'); // 可编辑状态
    // form.setFieldsValue({
    //   note: 'Hello world!',
    // });
  };

  if (editingKey) {
    return (
      <div>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          {dArr.map((item, index) => {
            return (
              <div key={index}>
                <Form.Item noStyle shouldUpdate>
                  {() => {
                    return (
                      <Form.Item
                        name={'KRContent-' + item.key}
                        label={'KR' + item.key}
                        rules={[{ required: true, message: `KR${item.key}内容不能为空` }]}
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
                        name={'weight-' + item.key}
                        label={'权重' + item.key}
                        rules={[{ required: true, message: `权重内容不能为空` }]}
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
                        name={'finished-' + item.key}
                        label={'完成度' + item.key}
                        rules={[{ required: true, message: `完成度内容不能为空` }]}
                        initialValue={item.finished}
                      >
                        <Input />
                      </Form.Item>
                    );
                  }}
                </Form.Item>
                <Button htmlType="button" onClick={() => DelOne(item.key)}>
                  删除{item.key}
                </Button>
              </div>
            );
          })}

          {/*   // 模板
          <Form.Item noStyle shouldUpdate>
            {() => {
              return (
                <Form.Item name="dName2" label="C2" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              );
            }}
          </Form.Item>
        */}
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              获取所有表单内容
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </Form>
        <h1>分割线</h1>

        <Button onClick={addOneInput}>添加一个input</Button>
      </div>
    );
  } else {
    return (
      <div>
        <Button onClick={isEdit}>进入编辑状态</Button>
        {dArr.map((item) => {
          return (
            <div key={item.key}>
              <div>
                {'KR' + item.key}:{item.KRContent}
              </div>
              <div>权重:{item.weight}</div>
              <div>完成度:{item.weight}</div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default formSelfEdit;
