// import React, { useRef } from 'react';
// import React, { useImperativeHandle } from 'react';
import React, { useImperativeHandle, forwardRef, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Button, DatePicker } from 'antd';

import moment from 'moment';
import '@/styles/CommonTitle.less';

const dateFormat = 'YYYY'; // 定义你需要的时间格式

const currentYear = moment().format(dateFormat);

// interface ChildProps {
//   msg: number;
//   changeCount: Function;
// }
// const CommonTitle: React.FC<ChildProps> = (props) => {
const CommonTitle = (props, ref) => {
  const [dataYear, setDataYear] = useState(currentYear);
  // 接收父组件的传值
  const { msg, getDate } = props;

  console.log(msg, props, ref);
  // 暴露的子组件方法，给父组件调用
  useImperativeHandle(props.cRef, () => {
    // console.log('ref:', ref);
    return {
      _childFn: () => {
        console.log('我是子组件的定义的方法', dataYear);
        // something….
        // yearOnChange(date, dateString)
      },
    };
  });
  const getDaTA = () => {
    console.log('66');
  };
  const disabledDate = (current) => {
    return current > moment(new Date(String(Number(currentYear) + 1)));
    // return current && current >= moment(new Date(String(Number(dataYear) + 1)));
  };
  const yearOnChange = (date, dateString) => {
    console.log(date);
    setDataYear(dateString);
    getDate(dateString);
  };
  return (
    <div className="CommonTitleClaWrap">
      <div className="baseTitle">实施管理中心年度目标</div>
      <div className="baseRight">
        <div>
          <DatePicker
            allowClear
            defaultValue={moment(dataYear, dateFormat)}
            format={dateFormat}
            // suffixIcon={() => selfYearIcon}
            disabledDate={disabledDate}
            onChange={yearOnChange}
            picker="year"
          />
        </div>
        <div>
          <Button onClick={getDaTA} type="primary">
            导出
          </Button>
        </div>
      </div>
    </div>
  );
};

// export default hot(CommonTitle);
export default hot(forwardRef(CommonTitle));
