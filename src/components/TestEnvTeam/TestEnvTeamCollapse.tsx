import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import '@/styles/TestEnvTeam/TestEnvTeamCollapse.less';

import { Collapse, Input, Button, Form, message,Popover,Menu } from 'antd';

import { PlusCircleOutlined, SendOutlined, EllipsisOutlined,CloseOutlined } from '@ant-design/icons';
import TestEnvTeamList from '@/components/TestEnvTeam/TestEnvTeamList';
// import TestEnvTeamTable from '@/components/TestEnvTeam/TestEnvTeamTable';
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const choiceAction = ({ editingKey,
  editObjective,
  editResult,
  row,
  delNewCollapse }) => {
  console.log(editingKey);
 
  return (
    <Menu>
      <Menu.Item>
        <span className="EditDelRowCla" onClick={() => editObjective(row)}>
        编辑Objective
        </span>
      </Menu.Item>
      <Menu.Item>
        <span className="EditDelRowCla" onClick={() => editResult(row)}>
        编辑Result
        </span>
      </Menu.Item>
      <Menu.Item>
        <span className="EditDelRowCla" onClick={() => delNewCollapse(row)}>
          删除Objective
        </span>
      </Menu.Item>
    </Menu>
  );
};

const TestEnvTeamCollapse = (parentObejct: any) => {
  // console.log('parentObejct:',parentObejct.objectArr)
  // console.log('parentObejct:',parentObejct)

  const CollapseList: any = [
    {
      key: '1',
      id: 1,
      headItem: { head: '第一个', weight: '100%', finish: '56%', admin: '李雷', isAction: true },
      list: [
        {
          id: 1,
          key: '1',
          content: 'woshineir1',
          myWeight: '30%',
          myFinish: '20%',
          myAdmin: '朱',
          myAction: '详情',
        },
        {
          id: 2,
          key: '2',
          content: 'woshineir2',
          myWeight: '50%',
          myFinish: '70%',
          myAdmin: '文',
          myAction: '详情',
        },
      ],
    },
    {
      key: '2',
      id: 2,
      headItem: {
        head: '第一hg个',
        weight: '10%',
        finish: '86%',
        admin: '李jing',
        isAction: false,
      },
      list: [
        {
          id: 1,
          key: '1',
          content: 'woshineir1',
          myWeight: '30%',
          myFinish: '20%',
          myAdmin: '朱',
          myAction: '详情',
        },
        {
          id: 2,
          key: '2',
          content: 'woshineir2',
          myWeight: '50%',
          myFinish: '70%',
          myAdmin: '文',
          myAction: '详情',
        },
      ],
    },
  ];
  console.log('数据格式：', CollapseList);
  const [form] = Form.useForm();
  const [CollapseListData, setCollapseListData] = useState(parentObejct.objectArr);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.headItem.head === editingKey;
  // const [CurrentList, setCurrentList] = useState([]);
  console.log('editingKey:', editingKey);
  // const [CollapseListData, setCollapseListData] = useState(CollapseList);

  const myHead = (row,order) => {
    console.log('折叠面板表头内容：', row, isEditing,order);
    console.log('折叠面板表头内容order：', order);
    // console.log('折叠面板表头是否存在内容row.headItem.head：', row.headItem.head);
    const isEditInput = isEditing(row);
    // console.log('是否可编辑：', isEditInput);
    if (isEditInput) {
      return (
        <div className="collapseHeaderCla">
          <div className="objectOrder">O{order+1}:</div>

          <div className="objectInput">
            <Form.Item
              name={'headSelf'}
              
              style={{
                margin: 0,
              }}
              rules={[
                {
                  required: true,
                  message: `添加Objective的内容不能为空`,
                  // message: `KR${title} 不能为空`,
                },
              ]}
            >
              <Input defaultValue={row.headItem.head} />
            </Form.Item>
          </div>
          <div className="objectAdmin">
          <CloseOutlined  onClick={() => delNewCollapse(row)}/>
          </div>
          <div className="objectIsAction">
            <Button
              onClick={() => save(row.key)}
              style={{
                marginRight: 8,
              }}
            >
              保存
            </Button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="collapseHeaderCla">
          <div className="objectTitle">
            <span className="objectTitleNum">O{order+1}:</span> {row.headItem.head}
          </div>
          <div className="objectWeight">权重：{row.headItem.weight}%</div>
          <div className="objectFinish">完成度：{row.headItem.finish}%</div>
          <div className="objectAdmin">负责人</div>
          <div className="objectIsAction">
          <Popover
          placement="bottom"
          content={choiceAction({
            editingKey,
            editObjective,
            editResult,
            row,
            delNewCollapse
          })}
          trigger="click"
        >
          <EllipsisOutlined />
        </Popover>
          </div>
        </div>
      );
    }
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      console.log('编辑之后的row:', row); // 当前被编辑过的input对象
      const newData = [...CollapseListData]; // 获取更新之后的新数组，放入表格中的
      console.log('编辑之后的newData:', newData);
      const index = newData.findIndex((item) => key === item.key);
      console.log('选中被修改的newData:', newData[index]);

      newData[index].headItem.head = row.headSelf;
      delete newData[index].headSelf;
      if (index > -1) {
        const item = newData[index]; // 编辑过的当前行
        console.log('item不存在的时候:', item);
        newData.splice(index, 1, { ...item, ...row }); // item必须在前，row必须在后
        setCollapseListData(newData);
        setEditingKey('');
      } else {
        // newData.push(row);
        setCollapseListData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('编辑出错啦:', errInfo);
    }
  };

  const editObjective = (row) => {
    console.log('editObjective', row)
    console.log('当前页面中现有的数据：', CollapseListData);
    const newCollapseListData = [...CollapseListData];
    const index = newCollapseListData.findIndex((item) => row.key === item.key);
    console.log('需要编辑的行', index)
    // 选中需要编辑的head的内容
    let oldHead = newCollapseListData[index].headItem.head
    setEditingKey(oldHead)
    
  }
  const editResult = (row) => {
    console.log('editResult',row)
  }

  const delNewCollapse = (row) => {
    // console.log(row)
    // console.log('当前页面中现有的数据：', CollapseListData);
    const newCollapseListData = [...CollapseListData];
    const index = newCollapseListData.findIndex((item) => row.key === item.key);
    newCollapseListData.splice(index, 1);
    setCollapseListData(newCollapseListData);
    setEditingKey('');
  }

  const addOneCollapse = () => {
    console.log(66, CollapseListData);
    if (editingKey) {
      message.warning('请先保存当前编辑的Objective');
    } else {
      form.resetFields();
      let len = CollapseListData.length;
      // console.log('list:', CollapseListData[len - 1].list)

      // const newIndex = len + 1;
      // let Len = CollapseListData.length - 1].list.length + 1;
      // console.log(newIndex.toString());
      setEditingKey(''); // row.headItem.head 为空时，可编辑
      let obj = {
        key: len.toString(),
        id: len,
        headItem: {
          head: ``,
          weight: '100%',
          finish: '0%',
          admin: '负责人',
          isAction: true,
        },
        list: [],
      };

      CollapseListData.push(obj);
      const newCollapseListData = [...CollapseListData];
      setCollapseListData(newCollapseListData);
    }
  };
  return (
    <div className="DefinedCollapseContainer">
      <div className="objectTypeCla">
        <SendOutlined />
        <span className="objectTypeTitle">{parentObejct.title}</span>{' '}
      </div>

      <Form form={form} component={false}>
        <Collapse
          defaultActiveKey={['1']}
          onChange={callback}
          bordered={false}
          expandIconPosition={'right'}
        >
          {CollapseListData.map((item,order) => {
            return (
              <Panel header={myHead(item, order)} key={item.key}>
                {/*<TestEnvTeamTable key={item.key} {...item}></TestEnvTeamTable>*/}
                <TestEnvTeamList key={item.key} {...item}></TestEnvTeamList>
              </Panel>
            );
          })}
        </Collapse>
      </Form>

      <div className="addOneBtnCla" onClick={() => addOneCollapse()}>
        <PlusCircleOutlined></PlusCircleOutlined>
        <span className="addTargetCla">添加Objective</span>
      </div>
      {/*      
        <AddBtn addOneCollapse={addOneCollapse}/>
      */}
    </div>
  );
};

export default hot(TestEnvTeamCollapse);
