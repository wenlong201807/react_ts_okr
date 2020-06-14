import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Button, DatePicker } from 'antd';
import { GetData } from '@/services/api/testGetData.ts';
import moment from 'moment';
import '@/styles/CommonTitle.less';

const dateFormat = 'YYYY'; // 定义你需要的时间格式

const currentYear = moment().format(dateFormat);

function CommonTitle() {
  const getDaTA = () => {
    const param = {};
    GetData(param).then((res: any) => {
      console.log(res);
    });
  };
  const disabledDate = (current) => {
    return current && current >= moment(new Date(String(Number(currentYear) + 1)));
  };
  const yearOnChange = (date, dateString) => {
    console.log(date, dateString);
    console.log(dateString);
  };
  return (
    <div className="CommonTitleClaWrap">
      <div className="baseTitle">实施管理中心年度目标</div>
      <div className="baseRight">
        <div>
          <DatePicker
            allowClear
            defaultValue={moment(currentYear, dateFormat)}
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
}

export default hot(CommonTitle);
