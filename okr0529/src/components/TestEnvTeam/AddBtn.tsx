import React, { useState } from 'react';
// import React, { useContext, useState, useEffect, useRef } from 'react';
// import { Table, Input, InputNumber, Form, Button, message, Popconfirm, Menu, Popover } from 'antd';
// import { Table, Input, InputNumber, Form, Button, message, Popconfirm, Menu, Dropdown } from 'antd';
//
import { PlusCircleOutlined } from '@ant-design/icons';

import { hot } from 'react-hot-loader/root';
// import '../styles/reflect/editorCell.less';
import '@/styles/TestEnvTeam/AddBtn.less';

const AddbtnComp = () => {
  const [data, setData] = useState('originData');

  const addOneRow = () => {
    console.log(555);
    console.log(data);
    setData('hh');
  };

  return (
    <div className="AddBtnCla">
      <div className="addOneBtnCla" onClick={() => addOneRow()}>
        <PlusCircleOutlined></PlusCircleOutlined>

        <span className="addTargetCla">添加Objective</span>
      </div>
    </div>
  );
};

export default hot(AddbtnComp);
