import React, { useState } from 'react';
// import React, { useContext, useState, useEffect, useRef } from 'react';
import {
    Table,
    Input,
    InputNumber,
    Form,
    Button,
    message,
    DatePicker,
    Popconfirm,
    Popover,
} from 'antd';

import { PlusCircleOutlined, EllipsisOutlined } from '@ant-design/icons';

import { hot } from 'react-hot-loader/root';
import '../../styles/reflect/BaseCenterOKR.less';

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
    return (
        <div className="rowHandlerChange">
            <div
                className="EditDelRowCla"
                // disabled={editingKey !== ''}
                onClick={(e) => edit(e, record)}
            >
                编辑
            </div>
            <Popconfirm title="确定要取消删除吗?" onConfirm={() => delRow(record)}>
                <div className="EditDelRowCla">删除</div>
            </Popconfirm>
        </div>
    );
};

const BaseCenterOKR = () => {
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
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record) => record.key === editingKey;

    const edit = (e, record) => {
        console.log('edit--record--cell:', e, record);
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
            const newIndex = data[len - 1].id + 1;
            console.log(len, data[len - 1]);
            setEditingKey(newIndex.toString()); // 新添加的这一行变成可编辑状态
            const newRow = {
                id: newIndex,
                key: newIndex.toString(),
                centerObjectCatage: ``,
                targetMean: ``,
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

    const sendCancen = () => {
        console.log('取消发送');
    };
    const sendAllData = () => {
        if (editingKey) {
            console.log('请先保存当前编辑内容,才能发送数据');
            message.warning('请先保存当前编辑内容,才能发送数据');
        } else {
            console.log('发送所有数据', data);
        }
    };

    const yearOnChange = (date, dateString) => {
        console.log(date, dateString);
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
                        <Popconfirm
                            title="确定要取消修改吗?"
                            onConfirm={() => cancelUpdate(record)}
                        >
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
                            trigger="hover"
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
        <div className="editorCellCla">
            <div className="centerTitle">
                <div className="baseTitle">实施管理中心年度目标</div>
                <div className="baseRight">
                    <div>
                        {' '}
                        <DatePicker onChange={yearOnChange} picker="year" />
                    </div>
                    <div>
                        {' '}
                        <Button type="primary">导出</Button>
                    </div>
                </div>
            </div>
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
            <div className="addOneBtnCla"  onClick={() => addOneRow()}>
               
                    <PlusCircleOutlined></PlusCircleOutlined>
                    添加目标
               
            </div>
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
        </div>
    );
};

export default hot(BaseCenterOKR);
