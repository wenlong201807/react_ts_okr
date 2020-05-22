import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Button } from 'antd';

const teamBtn = () => {
    console.log('团队');
};
function Teams() {
    return (
        <div className="team-container">
            <div className="header-introduce">
                <h2 className="title">测试环境团队OKR管理</h2>
                <Button type="primary" onClick={teamBtn}>
                    团队55
                </Button>
            </div>
            <div>
            
            </div>
        </div>
    );
}

export default hot(Teams);
