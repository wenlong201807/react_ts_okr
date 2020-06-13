// import React from 'react';
import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';

import '@/styles/test/formSelf.less';

const { Option } = Select;

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const DemoFormK = () => {
  const dynamicArr = [{ key: 1, name: 'default', weight: 'weight', value: 'defaultValue' }];
  const [form] = Form.useForm();
  const [dArr, setDArr] = useState(dynamicArr);

  const addOneInput = () => {
    console.log('addOneInput');
    let lastKey: any = 0;
    let obj: any = {};
    if (dArr.length) {
      lastKey = dArr[dArr.length - 1].key + 1;
      lastKey = dArr[dArr.length - 1].key + 1;
      obj = { key: lastKey, name: 'default', weight: 'weight', value: 'defaultValue' };
    } else {
      obj = { key: 1, name: 'default', weight: 'weight', value: 'defaultValue' };
    }

    dArr.push(obj);
    const newArr = [...dArr];
    setDArr(newArr);
  };

  const DelOne = (index) => {
    console.log(index);
    dArr.splice(index, 1);
    // let obj = { key: lastKey, name: 'default', value: 'defaultValue' };
    // dArr.push(obj);
    const newArr = [...dArr];
    setDArr(newArr);
  };

  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        return;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        return;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
        return;
      default:
        form.setFieldsValue({ note: 'Hiee there!' });
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
    getAllFormValue(values);
  };

  const onReset = () => {
    form.resetFields();
  };
  const getAllFormValue = (values: any = '所有input内容') => {
    console.log('获取所有内容：', values);
    // console.log('获取指定内容：', form.getFieldValue('note'));
    // form.getFieldValue('note')
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  return (
    <div>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select onChange={onGenderChange} allowClear>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
        >
          {({ getFieldValue }) => {
            return getFieldValue('gender') === 'other' ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            ) : null;
          }}
        </Form.Item>

        {dArr.map((item, index) => {
          return (
            <div key={index}>
              <Form.Item noStyle shouldUpdate>
                {() => {
                  return (
                    <Form.Item
                      name={item.name + item.key}
                      label={item.name + item.key}
                      rules={[{ required: true }]}
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
                      name={item.weight + item.key}
                      label={item.weight + item.key}
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  );
                }}
              </Form.Item>
              <Button htmlType="button" onClick={() => DelOne(index)}>
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
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>
      <h1>分割线</h1>
      <Button onClick={getAllFormValue}>获取所有表格的值</Button>
      <Button onClick={addOneInput}>添加一个input</Button>
    </div>
  );
};

export default DemoFormK;
