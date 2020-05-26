import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const myFormList: any = [
  [
    {
      title: 'KR',
      name: 'content',
      content: '今天去哪里1？',
    },
    {
      title: '权重',
      name: 'myWeight',
      content: '20',
    },
    {
      title: '完成度',
      name: 'myFinish',
      content: '60',
    },
  ],
  [
    {
      title: 'KR',
      name: 'content',
      content: '今天去哪里2？',
    },
    {
      title: '权重',
      name: 'myWeight',
      content: '40',
    },
    {
      title: '完成度',
      name: 'myFinish',
      content: '50',
    },
  ],
];
console.log('myFormList:', myFormList);
const multiRowForm = () => {
  const [form] = Form.useForm();

  const [EditFormList, setEditFormList] = useState(myFormList);
  const getALLDataForm = () => {
    console.log(form);
    console.log(form.getFieldsValue());
  };
  const onFinish = (values) => {
    console.log('values:', values);
  };
  const delOneRow = (index) => {
    console.log('index:', index);
    form.resetFields();
    EditFormList.splice(index, 1);
    const newEditFormList = [...EditFormList];
    console.log('EditFormList', EditFormList);
    console.log('newEditFormList', newEditFormList);
    setEditFormList(newEditFormList);
  };

  const addOneRow = () => {
    form.resetFields();
    // let len = myFormList.length
    // let newROWIndex = len + 1
    let newList = [
      {
        title: 'KR',
        name: 'content',
        content: '',
      },
      {
        title: '权重',
        name: 'myWeight',
        content: '',
      },
      {
        title: '完成度',
        name: 'myFinish',
        content: '',
      },
    ];
    EditFormList.push(newList);
    const newEditFormList = [...EditFormList];
    setEditFormList(newEditFormList);
  };
  return (
    <div>
      <div>
        <Button type="primary" onClick={() => getALLDataForm()}>
          获取表格内容
        </Button>
        <Button type="primary" onClick={() => addOneRow()}>
          添加一行
        </Button>
      </div>
      <Form
        layout={'inline'}
        form={form}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        // initialValues={{ layout: formLayout }}
        // onValuesChange={onFormLayoutChange}
      >
        {EditFormList.map((list, index) => {
          // console.log(list, index);
          return (
            <div key={index}>
              {list.map((item, inner) => {
                console.log('内层循环:', item, inner, index);
                return (
                  <div key={inner}>
                    <div>
                      <Form.Item
                        label={item.title == 'KR' ? `KR${1 + index}` : item.title}
                        name={item.name + index + '-' + inner}
                        initialValue={item.content}
                        rules={[{ required: true, message: `${item.title}不能为空` }]}
                      >
                        <Input placeholder={item.content} />
                      </Form.Item>
                    </div>
                  </div>
                );
              })}
              <Button type="primary" onClick={() => delOneRow(index)}>
                删除一行
              </Button>
            </div>
          );
        })}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default hot(multiRowForm);
