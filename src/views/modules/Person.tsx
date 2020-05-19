import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
// import { PlusCircleOutlined } from '@ant-design/icons';
import { hot } from 'react-hot-loader/root';

import '../../styles/reflect/person.less';

const EditableContext = React.createContext<any>('');

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell: any = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef: any = useRef();
    const form: any = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async (e: any) => {
        console.log(e);
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (error) {
            console.log('Save failed:', error);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {
    columns: any;
    state: any;
    constructor(props: any) {
        super(props);
        this.columns = [
            {
                title: 'name',
                dataIndex: 'name',
                width: '30%',
                editable: true,
            },
            {
                title: 'age',
                dataIndex: 'age',
            },
            {
                title: 'address',
                dataIndex: 'address',
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm
                            title="Sure to delete?"
                            onConfirm={() => this.handleDelete(record.key)}
                        >
                            <a>Delete</a>
                        </Popconfirm>
                    ) : null,
            },
        ];
        this.state = {
            dataSource: [
                {
                    key: '0',
                    name: 'Edward King 0',
                    age: '32',
                    address: 'London, Park Lane no. 0',
                },
                {
                    key: '1',
                    name: 'Edward King 1',
                    age: '32',
                    address: 'London, Park Lane no. 1',
                },
            ],
            count: 2,
        };
    }

    handleDelete = (key: any) => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter((item) => item.key !== key),
        });
    };

    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            name: `待定... ${count}`,
            age: 32,
            address: `London, Park Lane no. ${count}`,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    };

    handleSave = (row: any) => {
        const newData: any = [...this.state.dataSource];
        const index = newData.findIndex((item: any) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        this.setState({
            dataSource: newData,
        });
    };

    render() {
        console.log(this.state);
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableRow,
                cell: EditableCell,
            },
        };
        const columns: any = this.columns.map((col: any) => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: (record: any) => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div>
                <div className="tableContainerPerson">
                    <Table
                        components={components}
                        rowClassName={() => 'editable-row'}
                        // bordered
                        dataSource={dataSource}
                        columns={columns}
                    />
                </div>
                <Button
                    onClick={this.handleAdd}
                    type="primary"
                    style={{
                        marginBottom: 16,
                    }}
                >
                    添加目标(新添一行)
                </Button>

                <div>
                    <Button
                        onClick={this.handleAdd}
                        type="primary"
                        style={{
                            marginBottom: 16,
                            marginRight: 32,
                        }}
                    >
                        取消
                    </Button>

                    <Button
                        onClick={this.handleAdd}
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
    }
}

export default hot(EditableTable);
