import React, { useState } from 'react';
// import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, InputNumber, Form, Button, message, Popconfirm, Menu, Popover } from 'antd';
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';

import { hot } from 'react-hot-loader/root';
import '@/styles/TestEnvTeam/TestEnvTeamTable.less';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
 
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `${title} 不能为空`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

// const menu = (
//   <Menu>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
//         1st menu item
//       </a>
//     </Menu.Item>
//     <Menu.Item>
//       <div className="menItemSelfCla">3rd menu item</div>
//     </Menu.Item>
//   </Menu>
// );

const choiceAction = ({ editingKey, edit, record, delRow }) => {
  console.log(editingKey);
  // <Button type="link" disabled={editingKey !== ''} onClick={() => delRow(record)}>
  //     删除
  // </Button>;
  /**
     *  <Popconfirm title="确定要取消修改吗?" onConfirm={cancelUpdate}>
                            <Button>取消</Button>
                        </Popconfirm>

                          <div className="EditDelRowCla" onClick={(e) => delRow(e,record)}>
                    删除
                </div>
    */

  /*
  <div className="rowHandlerChange">
        
            <div
                className="EditDelRowCla"
                // disabled={editingKey !== ''}
                onClick={(e) => edit(e, record)}
            >
                编辑6
            </div>
            <Popconfirm title="确定要取消删除吗?" onConfirm={() => delRow(record)}>
                <div className="EditDelRowCla">删除7</div>
            </Popconfirm>
        </div>
  
  */
  return (
    <Menu>
      <Menu.Item>
        <span className="EditDelRowCla" onClick={() => edit(record)}>
          编辑6
        </span>
      </Menu.Item>
      <Menu.Item>
        <span className="EditDelRowCla" onClick={() => delRow(record)}>
          删除7
        </span>
      </Menu.Item>
    </Menu>
  );
};

const TestEnvTeamTable = (TableList: any) => {
  console.log('TableList:', TableList);
  console.log('TableList:', TableList.list);
  const originData: any = [
    {
      id: 1,
      key: '1',
      centerObjectCatage: 'KR1：与开发进度信息对接，展示环境拓扑图上各组件版本开发完成情况',
      targetMean: '建设全流程',
    },
    {
      id: 2,
      key: '2',
      centerObjectCatage:
        'KR2：根据测试环境绿灯雷达监测，展示测试环境作战地图上各组件的应用健康检查情况',
      targetMean: '赋能事业群',
    },
  ];

  console.log(originData);

  const [form] = Form.useForm();
  const [data, setData] = useState(TableList.list);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    console.log('edit--record--cell:', record);
    form.setFieldsValue({
      centerObjectCatage: '',
      targetMean: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const delRow = (record) => {
    console.log('delRow--record:', record.id);
    const newData = [...data];
    const index = newData.findIndex((item) => record.id === item.id);
    newData.splice(index, 1); // 删除指定行数据
    setData(newData);
  };

  const addOneRow = () => {
    console.log('editingKey:', editingKey);
    if (editingKey) {
      console.log('请先保存当前编辑内容');
      message.warning('请先保存当前编辑内容');
    } else {
      form.resetFields();
      let len = data.length;
      console.log('data:', data, len);
      let newIndex = 0;
      if (len) {
        newIndex = data[len - 1].id + 1;
      } else {
        newIndex = 1;
      }

      setEditingKey(newIndex.toString()); // 新添加的这一行变成可编辑状态
      const newRow = {
        id: newIndex,
        key: newIndex.toString(),
        content: ``,
        myWeight: ``,
        myFinish: ``,
        myAdmin: ``,
      };
      data.push(newRow);
      const newData = [...data];
      setData(newData);
    }
  };

  const cancelUpdate = (record) => {
    console.log('record:', record);
    let bigIndex = data[data.length - 1].id;
    if (record.id === bigIndex && !record.targetMean && !record.centerObjectCatage) {
      delRow(record);
    } else {
      console.log('cancelUpdate...');
    }
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      console.log('编辑之后的row:', row);
      const newData = [...data]; // 获取更新之后的新数组，放入表格中的
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index]; // 编辑过的当前行
        console.log('item:', item);
        newData.splice(index, 1, { ...item, ...row }); // item必须在前，row必须在后
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('编辑出错啦:', errInfo);
    }
  };

  // const sendCancen = () => {
  //   console.log('取消发送');
  // };
  // const sendAllData = () => {
  //   if (editingKey) {
  //     console.log('请先保存当前编辑内容,才能发送数据');
  //     message.warning('请先保存当前编辑内容,才能发送数据');
  //   } else {
  //     console.log('发送所有数据', data);
  //   }
  // };

  const columns = [
    {
      title: '中心目标分类',
      dataIndex: 'content',
      width: '50%',
      editable: true,
      className: 'headerSelfCla',
    },
    {
      title: '权重',
      dataIndex: 'myWeight',
      width: '15%',
      editable: true,
      className: 'headerSelfCla',
    },
    {
      title: '完成度',
      dataIndex: 'myFinish',
      width: '15%',
      editable: true,
      className: 'headerSelfCla',
    },
    {
      title: '负责人',
      dataIndex: 'myAdmin',
      width: '10%',
      editable: true,
      className: 'headerSelfCla',
    },
    {
      title: '操作',
      width: '10%',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            {/*
                         <Button
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            保存
                        </Button>
                        */}
            <Button
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              保存
            </Button>
            <Popconfirm title="确定要取消修改吗?" onConfirm={() => cancelUpdate(record)}>
              <Button>取消</Button>
            </Popconfirm>
          </span>
        ) : (
          <div>
            <Popover
              placement="bottom"
              content={choiceAction({
                editingKey,
                edit,
                record,
                delRow,
              })}
              trigger="click"
            >
              <EllipsisOutlined />
            </Popover>
          </div>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <div className="TestEnvTeamTableCla">
      <div className="tableContainerPerson">
        <Form form={form} component={false}>
          <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            // bordered
            onRow={record => {
              return {
                onClick: event => {
                  console.log('点击行触发:',record,event)
                  console.log('TableList:',TableList)
                }, // 点击行
              
              };
            }}
            pagination={false}
            showHeader={false}
            dataSource={data}
            columns={mergedColumns}
            rowClassName={() => 'editable-row'}
          />
        </Form>
      </div>
      {/*
   
      */}
      <div className="addOneBtnCla" onClick={() => addOneRow()}>
        <PlusOutlined />

        <span className="addTargetCla">添加Key Results</span>
      </div>
      {/*
       <div className="calcelSaveCla">
        <Button
          onClick={() => sendCancen()}
          type="primary"
          style={{
            marginBottom: 16,
            marginRight: 32,
          }}
        >
          取消
        </Button>

        <Button
          onClick={() => sendAllData()}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          保存
        </Button>
      </div>
      */}
    </div>
  );
};

export default hot(TestEnvTeamTable);
