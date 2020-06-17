import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Progress, Input } from 'antd';
const { TextArea } = Input;
import { LeftOutlined, CloseOutlined, PlusOutlined, UpOutlined } from '@ant-design/icons';
import history from '@/historys';

import '@/styles/TeamOKRExam/PersonYearKRDetail.less';

function PersonYearKRDetail() {
  const jumpToMyOKR = (key) => {
    console.log('key:', key);
    history.push('/home/TestEnvTeamOKR');
  };
  return (
    <div className="PersonYearKRDetailWrap">
      <div className="topNav">
        <div>
          <LeftOutlined onClick={() => jumpToMyOKR('1')} />
          <span className="title">个人年度KR详情</span>
        </div>
        <div>
          <CloseOutlined />
        </div>
      </div>

      <div className="yearRelative">
        <div className="title">
          <div className="subtitle_55">
            <span className="subtitle_third">年度KR2：</span> 测试环境绿灯雷达监测开发工作
          </div>
          <div className=" yearKRTop">年度KR权重</div>
          <div className=" finishTop">完成度</div>
          <div className=" adminTop">负责人</div>
        </div>

        <div className="content">
          <div className="subtitle_55 mr_third">
            <div className="small_fas_15">中心目标：实施平台化战略</div>
            <div className="small_fas_15">团队O1：配合智慧协同平台建设完成测试环境可视化展示</div>
            <div className="small_fas_15">
              ----个人O2：配合智慧协同平台，完成绿灯雷达的相关开发工作
            </div>
            <div className="small_fas_15">
              团队年度KR1：根据测试环境绿灯雷达监测，展示测试环境作战地图上各组件的应用健康检查情况
            </div>
          </div>
          <div className="yearKRTop">20%</div>
          <div className="finishTop small_finish_15">
            <Progress percent={30} />
          </div>
          <div className="adminTop small_ad_15">张三</div>
        </div>
      </div>

      <div className="reasonKRDetailClaWrap">
        <div className="reasonKRDetailTitle">
          <div className="headOne">季度KR详情</div>
          <span className="headRight">
            <UpOutlined />
          </span>
        </div>

        {/*季度KR详情内容部分*/}
        <div className="detailContentWrap">
          {/* 季度标题 */}
          <div className="reasonTitle">
            <div className="headTwo">
              <span className="blueDot"></span> 第一季度KR
            </div>
            <div className="reasonWeight">季度权重:100%</div>
            <div className="reasonFinish">完成度:60%</div>
            <div className="action">
              <span className="headTwoRight">...</span>
              <span className="headTwoRight">
                <UpOutlined />
              </span>
            </div>
          </div>

          {/* 每一个季度的KR  ***可展开收起的部分 **通过添加，删除样式控制 className={{'reasonContentShow':true reasonContentHide:false}}*/}
          <div className="reasonContentShow">
            {/* 每一个KR*/}
            <div className="KRContentWrap">
              <div className="KR">
                <div>
                  <span className="innerTitle">KR1：</span> 完成方案设计及实施计划制定
                </div>
                <div className="connectTeam">
                  团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示
                </div>
              </div>
              <div className="small_15">50%</div>
              <div className="small_15">
                <Progress percent={30} />
              </div>
              <div className="none_word">空</div>
            </div>

            {/* 每一个KR*/}
            <div className="KRContentWrap">
              <div className="KR">
                <div>
                  <span className="innerTitle">KR1：</span> 完成方案设计及实施计划制定
                </div>
                <div className="connectTeam">
                  团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示
                </div>
              </div>
              <div className="small_15">50%</div>
              <div className="small_15">
                <Progress percent={30} />
              </div>
              <div className="none_word">空</div>
            </div>

            {/*添加 KR 按钮 , 个人progress进度*/}
            <div className="addKRBtn">
              <PlusOutlined /> 添加KR按钮
            </div>
            <div className="descTitle">个人progress进度：</div>
            <div className="processInput">
              <TextArea rows={2} />
            </div>
          </div>

          {/* 以上为完整一个季度的 */}
          {/* 以上为完整一个季度的 */}

          {/* 季度标题 */}
          <div className="reasonTitle">
            <div className="headTwo">
              <span className="blueDot"></span> 第一季度KR
            </div>
            <div className="reasonWeight">季度权重:100%</div>
            <div className="reasonFinish">完成度:60%</div>
            <div className="action">
              <span className="headTwoRight">...</span>
              <span className="headTwoRight">
                <UpOutlined />
              </span>
            </div>
          </div>

          {/* 每一个季度的KR  ***可展开收起的部分 **通过添加，删除样式控制 className={{'reasonContentShow':true reasonContentHide:false}}*/}
          <div className="reasonContentShow">
            {/* 每一个KR*/}
            <div className="KRContentWrap">
              <div className="KR">
                <div>
                  <span className="innerTitle">KR1：</span> 完成方案设计及实施计划制定
                </div>
                <div className="connectTeam">
                  团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示
                </div>
              </div>
              <div className="small_15">50%</div>
              <div className="small_15">
                <Progress percent={30} />
              </div>
              <div className="none_word">空</div>
            </div>

            {/* 每一个KR*/}
            <div className="KRContentWrap">
              <div className="KR">
                <div>
                  <span className="innerTitle">KR1：</span> 完成方案设计及实施计划制定
                </div>
                <div className="connectTeam">
                  团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示
                </div>
              </div>
              <div className="small_15">50%</div>
              <div className="small_15">
                <Progress percent={30} />
              </div>
              <div className="none_word">空</div>
            </div>

            {/*添加 KR 按钮 , 个人progress进度*/}
            <div className="addKRBtn">
              <PlusOutlined /> 添加KR按钮
            </div>
            <div className="descTitle">个人progress进度：</div>
            <div className="processInput">
              <TextArea rows={2} />
            </div>
          </div>

          {/* 以上为完整一个季度的 */}
          {/* 以上为完整一个季度的 */}

          {/* 季度标题 */}
          <div className="reasonTitle">
            <div className="headTwo">
              <span className="blueDot"></span> 第一季度KR
            </div>
            <div className="reasonWeight">季度权重:100%</div>
            <div className="reasonFinish">完成度:60%</div>
            <div className="action">
              <span className="headTwoRight">...</span>
              <span className="headTwoRight">
                <UpOutlined />
              </span>
            </div>
          </div>

          {/* 每一个季度的KR  ***可展开收起的部分 **通过添加，删除样式控制 className={{'reasonContentShow':true reasonContentHide:false}}*/}
          <div className="reasonContentShow">
            {/* 每一个KR*/}
            <div className="KRContentWrap">
              <div className="KR">
                <div>
                  <span className="innerTitle">KR1：</span> 完成方案设计及实施计划制定
                </div>
                <div className="connectTeam">
                  团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示
                </div>
              </div>
              <div className="small_15">50%</div>
              <div className="small_15">
                <Progress percent={30} />
              </div>
              <div className="none_word">空</div>
            </div>

            {/* 每一个KR*/}
            <div className="KRContentWrap">
              <div className="KR">
                <div>
                  <span className="innerTitle">KR1：</span> 完成方案设计及实施计划制定
                </div>
                <div className="connectTeam">
                  团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示
                </div>
              </div>
              <div className="small_15">50%</div>
              <div className="small_15">
                <Progress percent={30} />
              </div>
              <div className="none_word">空</div>
            </div>

            {/*添加 KR 按钮 , 个人progress进度*/}
            <div className="addKRBtn">
              <PlusOutlined /> 添加KR按钮
            </div>
            <div className="descTitle">个人progress进度：</div>
            <div className="processInput">
              <TextArea rows={2} />
            </div>
          </div>

          {/* 以上为完整一个季度的 */}
          {/* 以上为完整一个季度的 */}
        </div>
      </div>
    </div>
  );
}

export default hot(PersonYearKRDetail);
