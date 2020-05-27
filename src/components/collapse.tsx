import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

import '@/styles/test/multiRowForm.less';

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
const multiRowForm2 = () => {
  const [form] = Form.useForm();

  const [EditFormList, setEditFormList] = useState(myFormList);
  const [EditInput, setEditInput] = useState('EditInput');
  const getALLDataForm = () => {
    // console.log(form);
    console.log(form.getFieldsValue());
    let objToArr = Object.entries(form.getFieldsValue());
    // console.log(objToArr)
    let len = objToArr.length;
    // console.log('数组长度:', len);
    let changeArr: any = [];
    for (let i = 0; i < len; i++) {
      if (!(i % 3)) {
        changeArr.push([]);
      }
    }
    console.log('目标数据结构:', changeArr);
    // let innerArr: any = [];
    objToArr.map((list) => {
      // console.log(list, index);

      // console.log('更新之后的数组:', index, changeArr);
      let localKey = list[0].split('-');
      let value = list[1];
      let key = localKey[0];
      let outIndex = Number(localKey[1]);
      let innerIndex = Number(localKey[2]);
      // console.log('localKey:', localKey,value)
      // changeArr[outIndex][innerIndex][key]=value
      console.log('矩阵:', outIndex, innerIndex, key, value);
      if (key === 'content') {
        let obj: any = {};
        obj.title = 'KR';
        obj.name = 'content';
        obj.content = value;
        changeArr[outIndex][innerIndex] = obj;
      } else if (key === 'myWeight') {
        let obj: any = {};
        obj.title = '权重';
        obj.name = 'myWeight';
        obj.content = value;
        changeArr[outIndex][innerIndex] = obj;
      } else if (key === 'myFinish') {
        let obj: any = {};
        obj.title = '完成度';
        obj.name = 'myFinish';
        obj.content = value;
        changeArr[outIndex][innerIndex] = obj;
      }
    });
    console.log('最后结果:', changeArr);

    setEditFormList([...changeArr]);
    console.log('执行其他操作之前:先更新的数据结构EditFormList:', EditFormList);
  };
  const onFinish = (values) => {
    console.log('values:', values);
  };
  const delOneRow = (index) => {
    console.log('index:', index);
    // getALLDataForm(); // 更新每次的数据结构
    console.log('EditFormList删除一行前', EditFormList);
    // const newEditFormList = [...EditFormList];
    EditFormList.splice(index, 1);
    const newEditFormList = JSON.parse(JSON.stringify(EditFormList));
    // console.log('EditFormList', EditFormList);
    // form.resetFields();
    // console.log('newEditFormList', newEditFormList);
    setEditFormList(newEditFormList);
    console.log('EditFormList删除一行后', EditFormList);
  };

  const addOneRow = () => {
    // getALLDataForm(); // 更新每次的数据结构
    console.log('EditFormList添加一行前', EditFormList);
    // const newEditFormList = [...EditFormList];
    // const newEditFormList = JSON.parse(JSON.stringify(EditFormList));
    // let len = EditFormList.length + 1;
    let newList = [
      {
        title: 'KR',
        name: 'content',
        content: 'er',
      },
      {
        title: '权重',
        name: 'myWeight',
        content: 'yu',
      },
      {
        title: '完成度',
        name: 'myFinish',
        content: 'io',
      },
    ];
    // newEditFormList.push(newList);

    // setEditFormList(newEditFormList);
    setEditFormList([...EditFormList, newList]);
    // setTimeout(() => {
    //   getALLDataForm(); // 添加之后更新视图数据
    //   console.log('EditFormList添加一行后', EditFormList);
    // }, 5);
  };
  const checkData = () => {
    console.log('查看当前数据EditFormList:', EditFormList);
    console.log('form:', form)
    // form.setFieldsValue()
  };

  const getInputValue = (e) => {
    console.log('获取input数据:', e.target.value);
    // e.target[name] = e.target.value;
  };
  const dddd = (e) => {
    console.log('获取input数据:', e.target.value);
    // e.target[name] = e.target.value;
    setEditInput(e.target.value)
  };
 
  return (
    <div className="multiRowFormCla">
      <div>
        <input value="123" className="inputCla" onChange={(e) => getInputValue(e)} />
        <br />
        <Input
        placeholder="1"
        value={EditInput}
        style={{ width: '200px' }}
        onChange={(e) => dddd(e)}
      />
      </div>
      <div>
        <Button type="primary" onClick={() => getALLDataForm()}>
          获取表格内容
        </Button>
        <Button type="primary" onClick={() => addOneRow()}>
          添加一行
        </Button>
        <Button type="primary" onClick={() => checkData()}>
          查看当前数据
        </Button>
        <Button type="primary">获取input的内容</Button>
      </div>
      <Form
        layout={'inline'}
        form={form}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        // initialValues={{ layout: formLayout }}
        // onValuesChange={onFormLayoutChange}
        className="multiRowFormWrap"
      >
        {EditFormList.map((list, index) => {
          // console.log('外层循环:', JSON.stringify(list), index, index + Math.random());
          return (
            <div key={index + JSON.stringify(list)} className="multiRowFormOuter">
              {list.map((item, inner) => {
                // console.log('内层循环:', inner, JSON.stringify(item), inner + Math.random());
                return (
                  <div key={inner + JSON.stringify(item)} className="multiRowFormInner">
                    {item.title == 'KR' ? <span>KR{1 + index}</span> : <span>{item.title}</span>}
                    <Input
                      className="inputCla"
                      name={item.name + '-' + index + '-' + inner}
                      // onChange={(e) => getInputValue(e.target.value)}
                    />

                    {/*<Form.Item
                      label={item.title =='KR'? `KR${index+1}`:item.title}
                      name={item.name + '-' + index + '-' + inner}
                      initialValue={item.content}
                      rules={[{ required: true, message: `${item.title}不能为空` }]}
                    >
                      <Input placeholder={item.content} />
                    </Form.Item> */}
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
export default hot(multiRowForm2);
