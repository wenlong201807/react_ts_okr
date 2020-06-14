import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Button, DatePicker, Input } from 'antd';
import { GetData } from '@/services/api/testGetData.ts';
import moment from 'moment';
// import '@/styles/CommonTitle.less';
import '@/styles/TeamOKRExam/PanoramicView.less';

const dateFormat = 'YYYY'; // 定义你需要的时间格式
const currentYear = moment().format(dateFormat);

function PanoramicView() {
  const [val, setVal] = useState('');
  const [dataYear, setDataYear] = useState(currentYear);
  const dddd = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
  };

  const getDaTA = () => {
    const param = {};
    GetData(param).then((res: any) => {
      console.log(res);
    });
  };
  const disabledDate = (current) => {
    return current > moment(new Date(String(Number(currentYear) + 1)));
  };
  const yearOnChange = (date, dateString) => {
    console.log(date);
    setDataYear(dateString);
  };
  return (
    <div className="PanoramicViewClaWrap">
      {/* 可公用的标题*/}
      <div className="CommonTitleClaWrap">
        <div className="baseTitle">系统组OKR管理</div>
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

      {/* 数据总览 */}
      <div className="dataAssumeClaWrap">
        <div className="dataAssumeCla">
        <div>团队负责人</div>
        <div>刘洋</div>
        </div>
        <div className="dataAssumeCla">dfbdgn</div>
        <div className="dataAssumeCla">hfm g</div>
      </div>

      {/*团队成员列表区*/}

      <div  className="teamListClaWrap">
      
      </div>

      <h2>我是错误页面</h2>
      <Button onClick={getDaTA}>发请求</Button>
      <Input placeholder="1" value={val} style={{ width: '200px' }} onChange={(e) => dddd(e)} />
      <br />
    </div>
  );
}

export default hot(PanoramicView);
