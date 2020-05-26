import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Form, Input, Button } from 'antd';

const myFormList: any = [
  [
    {
      title: 'KR',
      name: 'content',
      initialValues: 'content',
      content: '今天去哪里？',
    },
    {
      title: '权重',
      name: 'myWeight',
      initialValues: 'myWeight',
      content: '今天去哪里？',
    },
    {
      title: '完成度',
      name: 'myWeight',
      initialValues: 'myWeight',
      content: '60',
    },
  ],
  [
    {
      title: 'KR',
      name: 'content',
      initialValues: 'content',
      content: '今天去哪里？',
    },
    {
      title: '权重',
      name: 'myWeight',
      initialValues: 'myWeight',
      content: '今天去哪里？',
    },
    {
      title: '完成度',
      name: 'myWeight',
      initialValues: 'myWeight',
      content: '60',
    },
  ],
];
console.log('myFormList:', myFormList);
const Teams = () => {
  const [form] = Form.useForm();
  const getALLDataForm = () => {
    console.log(form.getFieldsValue());
  };
  const onFinish = (values) => {
    console.log('values:', values);
  };
  return (
    <div>
      <div>
        <Button type="primary" onClick={() => getALLDataForm()}>
          获取表格内容
        </Button>
      </div>
      <Form
        layout={'inline'}
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // initialValues={{ layout: formLayout }}
        // onValuesChange={onFormLayoutChange}
      >
        <Form.Item
          label="KR1"
          name="content"
          initialValue={'item.content'}
          rules={[{ required: true, message: '大O不能为空' }]}
        >
          <Input placeholder="Objective" />
        </Form.Item>
        <Form.Item
          label="权重"
          name="myWeight"
          initialValue={'item.myWeight'}
          rules={[{ required: true, message: '权重不能为空' }]}
        >
          <Input placeholder="myWeight" />
        </Form.Item>
        <Form.Item
          label="完成度"
          name="myFinish"
          initialValue={'item.myFinish'}
          rules={[{ required: true, message: '完成度不能为空' }]}
        >
          <Input placeholder="myFinish" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default hot(Teams);
