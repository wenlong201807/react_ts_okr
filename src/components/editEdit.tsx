import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';
// import './a.css'
// import { getArticle } from '../service/api'
const rowlist: any = [
  {
    id: 1,
    title: '标题1',
    content: '内容1',
    conname: '姓名1',
    edit: false,
  },
  {
    id: 2,
    title: '标题2',
    content: '内容2',
    conname: '姓名2',
    edit: false,
  },
];

const EditTable = () => {
  const [data, setdataInfo] = useState<Array<any>>(rowlist);
  const addRow = () => {
    setdataInfo([
      ...data,
      {
        id: data.length + Math.random(),
        title: '',
        content: '',
        conname: '',
        edit: true,
      },
    ]);
    // console.log(data)
  };
  useEffect(() => {
    console.log(data);
  }, [data]);

  const RemoveValByIndex = (arr: [], index: number) => {
    arr.splice(index, 1);
  };
  const deleRow = (index: number) => {
    let copydata = JSON.parse(JSON.stringify(data));
    RemoveValByIndex(copydata, index);
    setdataInfo(copydata);
  };
  const saveRow = (id: number) => {
    let copydata = JSON.parse(JSON.stringify(data));
    let index = data.findIndex((item) => item.id === id);
    copydata[index] = Object.assign(copydata[index], {
      edit: false,
    });
    setdataInfo(copydata);
  };
  const getContent = (value: string, index: number) => {
    console.log(value);
    let copydata = JSON.parse(JSON.stringify(data));
    copydata[index].content = value;
    setdataInfo(copydata);
  };
  const getConname = (value: string, index: number) => {
    console.log(value);
    let copydata = JSON.parse(JSON.stringify(data));
    copydata[index].conname = value;
    setdataInfo(copydata);
  };
  const getTitle = (value: string, index: number) => {
    console.log(value);
    let copydata = JSON.parse(JSON.stringify(data));
    copydata[index].title = value;
    setdataInfo(copydata);
  };
  const saveTable = () => {
    let copydata = JSON.parse(JSON.stringify(data));
    copydata.forEach((item: any) => {
      item.edit = false;
    });
    setdataInfo(copydata);
    console.log(data);
  };
  const editall = () => {
    let copydata = JSON.parse(JSON.stringify(data));
    copydata.forEach((item: any, index: number) => {
      console.log(index)
      item.edit = true;
    });
    // data.forEach(item => {
    //   item.title =
    // })
    setdataInfo(copydata);
    // console.log(data)
  };
  return (
    <div>
      <Button type="primary" onClick={addRow}>
        添加一行
      </Button>
      <Button onClick={saveTable}>保存</Button>
      <Button onClick={editall}>全体编辑</Button>
      {data.map((item: any, index: number) => {
        if (item.edit) {
          return (
            <div key={item.id}>
              <div className="wrap">
                <Input
                  placeholder="1"
                  value={item.title}
                  style={{ width: '200px' }}
                  onChange={(e) => getTitle(e.target.value, index)}
                />
                <Input
                  placeholder="2"
                  value={item.content}
                  style={{ width: '200px' }}
                  onChange={(e) => getContent(e.target.value, index)}
                />
                <Input
                  placeholder="3"
                  value={item.conname}
                  style={{ width: '200px' }}
                  onChange={(e) => getConname(e.target.value, index)}
                />
                <Button onClick={() => saveRow(item.id)}>保存</Button>
                <Button onClick={() => deleRow(index)}>删除</Button>
              </div>
            </div>
          );
        } else {
          return (
            <div key={item.id}>
              <div className="wrap">
                <span>{item.title}</span>
                <span>{item.content}</span>
                <span>{item.conname}</span>
                <Button onClick={() => deleRow(index)}>删除</Button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default EditTable;
