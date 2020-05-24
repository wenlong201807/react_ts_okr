import React from 'react';
import { hot } from 'react-hot-loader/root';

import { Collapse } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const genExtra = () => (
  <SettingOutlined
    onClick={(event) => {
      // If you don prevent this:  DefinedCollapse
      event.stopPropagation();
      console.log('额外配置：', event);
    }}
  />
);

class myCollapse extends React.Component {
  render() {
    return (
      <div>
        <Collapse
          defaultActiveKey={['1']}
          onChange={callback}
          bordered={false}
          expandIconPosition={'right'}
        >
          <Panel header="This is panel hecdgnndg ader 1" key="1" extra={genExtra()}>
            <div>{text}</div>
          </Panel>
          <Panel header="This is panel header 2" key="2" extra={genExtra()}>
            <div>{text}</div>
          </Panel>
          <Panel header="This is panel header 3" key="3" extra={genExtra()}>
            <div>{text}</div>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

// function Collapse() {
//     return (
//         <div className="Collapse">
//             <h2>折叠面板页面</h2>
//         </div>
//     );
// }

export default hot(myCollapse);
