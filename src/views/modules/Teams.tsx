import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Button } from 'antd';

const teamBtn = () => {
    console.log('团队');
};
function Teams() {
    return (
        <div className="team">
            <h2 className="title">团队大哥看的页面</h2>
            <Button type="primary" onClick={teamBtn}>
                团队
            </Button>
        </div>
    );
}

export default hot(Teams);
