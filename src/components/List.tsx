import React, { useState, useEffect, useRef, useContext } from 'react';
import { Table, Button, Form, Input ,message} from 'antd';
import { RouteComponentProps } from 'react-router-dom';
// import { Link, RouteComponentProps } from 'react-router-dom';
import * as types from '../store/action-types';
import { User, UserListResponse } from '../typings/api';
import request, { AxiosResponse } from '../api/request';
import { CombinedState } from '../store/reducers';
import { UserState } from '../store/reducers/user';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

let mapStateToProps = (state: CombinedState): UserState => state.user;
let mapDispatchToProps = (dispatch: Dispatch) => ({
    storeUsers(list: Array<User>) {
        dispatch({ type: types.SET_USER_LIST, payload: list });
    },
});
type Props = RouteComponentProps &
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;
const columns = [
    {
        title: '序列号',
        dataIndex: 'id',
        key: 'id',
        render: (val: string) => {
            return (
                // <Link to={`/user/detail/`}>{val + record.tableName}</Link>
                <span>{val}</span>
            );
        },
    },
    {
        title: '中心目标分类',
        dataIndex: 'tableName',
        key: 'tableName',
    },
    {
        title: '目标含义',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: '操作',
        dataIndex: 'sex',
        key: 'sex',
        render: (val: string, record: User) => {
            // console.log(val, record);
            return (
                // <Link to={`/user/detail/`}>{val + record.tableName}</Link>
                <div>
                    <span>删除</span> ||
                    <span>修改</span>
                    <span>{val + record.sex}</span>
                </div>
            );
        },
    },
];

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
        console.log('toggleEdit', record);
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

/**
 *
 * 如果我还想同时实现刷新按钮，是不是要把useEffect中的获取user的函数抽出来，如果userList还涉及分页参数，是不是应该将函数抽出来，并且用useCallback包裹，以分页参数为依赖？
 */
function UserList(props: Props) {
    // console.log(props);
    // let limit = 5;
    // let [offset, setOffset] = useState(0);
    let [users, setUsers] = useState<Array<User>>(props.list);
    useEffect(() => {
        (async function () {
            let response: AxiosResponse<UserListResponse> = await request.get<
                UserListResponse,
                AxiosResponse<UserListResponse>
                // >(`http://localhost:3003/data`);
            >(`/api/table/list`);
            // AxiosResponse<UserListResponse>>(`/api/users?limit=${limit}&offset=${offset}`);
            // http://106.54.207.247:8086/api/table/list
            console.log(response);
            let { data,code } = response.data;
            console.log(data)
            if (code == 1) {
            setUsers(data); //data users
                // setOffset(offset + data.length);
            props.storeUsers(data);
            } else {
                message.error('获取用户列表失败');
            }
        })();
    }, []);
    const refresh = () => {
        // setOffset(0);
        console.log('帅新');
    };

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };
    return (
        <>
            <Button onClick={refresh}>刷新</Button>
            <Table
                components={components}
                columns={columns}
                dataSource={users}
                pagination={false}
                rowKey={(row: User) => row.id}
            />
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
