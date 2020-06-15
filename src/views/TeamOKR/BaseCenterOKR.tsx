import React, { useState, useRef } from 'react';

// import React, { useContext, useState, useEffect, useRef } from 'react';
import {
  Table,
  Input,
  InputNumber,
  Form,
  Button,
  message,
  // DatePicker,
  // Popconfirm,
  // Popover,
  Modal,
  Dropdown,
  Menu,
} from 'antd';

import {
  PlusCircleOutlined,
  EllipsisOutlined,
  CloseOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

import CommonTitle from '@/components/CommonTitle';

import { hot } from 'react-hot-loader/root';
import '@/styles/reflect/BaseCenterOKR.less';

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

const BaseCenterOKR: React.FC = () => {
  const originData: any = [
    {
      id: 1,
      key: '1',
      centerObjectCatage: '实施平台化战略',
      targetMean: '建设全流程智慧协同平台，以智慧驱动研发流程，以协同提升研发效能',
    },
    {
      id: 2,
      key: '2',
      centerObjectCatage: '专业能力建设',
      targetMean:
        '加强专业化测试与质控能力内建，为项目实施提供专业保障，通过技术工具推广赋能事业群质量内建',
    },
  ];

  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  // const [count, setCount] = useState(0);
  const [editingKey, setEditingKey] = useState('');
  const childRef: any = useRef();
  console.log(childRef);

  // 父调用子的方法
  const pToChildFn = () => {
    console.log('父调用子的方法', childRef);
    childRef.current._childFn();
  };

  const isEditing = (record) => record.key === editingKey;

  const choiceAction = (row) => {
    return (
      <Menu>
        <Menu.Item onClick={() => edit(row)}>编辑</Menu.Item>
        <Menu.Item onClick={() => delRow(row)}>删除</Menu.Item>
      </Menu>
    );
  };

  const edit = (record: any) => {
    console.log('edit--record--cell:', record);
    form.setFieldsValue({
      centerObjectCatage: '',
      targetMean: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const delRow = (record) => {
    // console.log('delRow--record:', record.id);
    Modal.confirm({
      title: '确定要删除吗？',
      icon: <ExclamationCircleOutlined />,
      // content: 'Bla bla ...',
      okText: '确认',
      cancelText: '取消',
      onCancel: () => {
        console.log('取消');
      },
      onOk: () => {
        console.log('删除');
        const newData = [...data];
        const index = newData.findIndex((item) => record.id === item.id);
        newData.splice(index, 1); // 删除指定行数据
        setData(newData);
      },
    });
  };

  const addOneRow = () => {
    // console.log('editingKey:', editingKey);
    if (editingKey) {
      // console.log('请先保存当前编辑内容');
      message.warning('请先保存当前编辑内容');
    } else {
      form.resetFields();
      let len = data.length;
      let newIndex: any;
      let newRow: any;
      if (len) {
        newIndex = data[len - 1].id + 1;
        setEditingKey(newIndex.toString()); // 新添加的这一行变成可编辑状态
        newRow = {
          id: newIndex,
          key: newIndex.toString(),
          centerObjectCatage: ``,
          targetMean: ``,
        };
      } else {
        setEditingKey('1'); // 新添加的这一行变成可编辑状态
        newRow = {
          id: 1,
          key: '1',
          centerObjectCatage: ``,
          targetMean: ``,
        };
      }
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

  // const parantHandler = () => {
  //   console.log('父组件方法给子组件使用的');
  // };
  const getdata = (data) => {
    console.log(data);
  };
  const columns = [
    {
      title: '序列号',
      dataIndex: 'id',
      width: '8%',
      editable: false,
      className: 'headerSelfCla',
    },
    {
      title: '中心目标分类',
      dataIndex: 'centerObjectCatage',
      width: '15',
      editable: true,
      className: 'headerSelfCla',
    },
    {
      title: '目标含义',
      dataIndex: 'targetMean',
      width: '60%',
      editable: true,
      className: 'headerSelfCla',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      className: 'headerSelfOperationCla',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              保存
            </Button>
            <CloseOutlined onClick={() => cancelUpdate(record)} />
            {/*  
             <Popconfirm title="确定要取消修改吗?" onConfirm={() => cancelUpdate(record)}>
              <Button>取消</Button>
            </Popconfirm>
            */}
          </span>
        ) : (
          <div>
            {/* 
              <Popover
              placement="bottom"
              content={choiceAction({
                editingKey,
                edit,
                record,
                delRow,
              })}
              trigger="hover"
            >
              <EllipsisOutlined />
            </Popover>
              */}
            <Dropdown overlay={choiceAction(record)}>
              <EllipsisOutlined />
            </Dropdown>
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
    <div className="editorCellCla">
      <CommonTitle
        // ref={childRef}
        // ref={childRef}
        getDate={getdata}
        cRef={childRef}
        msg={'count'}
        // changeCount={(code: number) => setCount(code)}
      ></CommonTitle>
      <div className="tableContainerPerson">
        <Form form={form} component={false}>
          <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            pagination={false}
            dataSource={data}
            columns={mergedColumns}
            rowClassName={() => 'editable-row'}
          />
        </Form>
      </div>
      <div className="addOneBtnCla" onClick={() => addOneRow()}>
        <PlusCircleOutlined></PlusCircleOutlined>
        添加目标
      </div>
      <span onClick={pToChildFn}>父调用子组件的方法</span>

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

export default hot(BaseCenterOKR);
