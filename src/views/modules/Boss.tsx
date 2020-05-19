import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Table, Button } from 'antd';

const data = [
    {
        key: '1',
        ind: 1,
        object: '实施平台化战略',
        mean: '建设全流程智慧协同平台，以智慧驱动研发流程，以协同提升研发效能',
        handle: '...',
    },
    {
        key: '2',
        ind: 2,
        object: '专业能力建设',
        mean:
            '加强专业化测试与质控能力内建，为项目实施提供专业保障，通过技术工具推广赋能事业群质量内建',
        handle: '...',
    },
];
const columns = [
    {
        title: '序号',
        dataIndex: 'ind',
        key: 'ind',
    },
    {
        title: '中心目标分类',
        dataIndex: 'object',
        key: 'object',
    },
    {
        title: '目标含义',
        dataIndex: 'mean',
        key: 'mean',
    },
    {
        title: '操作',
        dataIndex: 'handle',
        key: 'handle',
    },
];
// const bossBtn = () => {
//     console.log('boss');
// };
const obj: any = {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'beijing',
};

function Boss() {
    const [newObj, setObj] = useState(obj);
    const addRow = () => {
        console.log(newObj);
        setObj(newObj);
    };
    return (
        <div className="boss">
            <h2>实施管理中心年度目标</h2>
            <Table columns={columns} dataSource={data} />
            <p>
                hh <Button onClick={addRow}>取消</Button> <Button onClick={addRow}>保存</Button>{' '}
            </p>
        </div>
    );
}

export default hot(Boss);
