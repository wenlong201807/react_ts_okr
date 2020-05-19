import React, { memo } from 'react';
import { hot } from 'react-hot-loader/root';
import { Button } from 'antd';
// import './App.scss';
// import './App.less';

interface CounterProps {
    initialCount?: number;
    // rui?:string
}

const Counter = memo(function Counter({ initialCount = 0 }: CounterProps) {
    const [count, setCount] = React.useState(initialCount);
    const [zhu, setzhu] = React.useState('zhu');
    const [ruiTest, setrui] = React.useState('rui');

    const add = () => {
        setCount(count + 1);
    };
    const changZhu = () => {
        setzhu(`${zhu}wenlong`);
    };
    const changrui = () => {
        setrui(`${ruiTest}@liu`);
    };

    return (
        <div className="counter">
            <h1>加减法</h1>
            <Button type="primary" onClick={changZhu}>
                changZhu
            </Button>
            <p className="zhuCla">改变字符串zhu：{zhu}</p>

            <Button type="primary" onClick={changrui}>
                changZhu
            </Button>
            <p className="testCla">改变字符串rui：{ruiTest}</p>

            <input type="text" value={count} readOnly />

            <button type="button" onClick={add}>
                +
            </button>
        </div>
    );
});

function About() {
    return (
        <div className="app">
            <h2 className="title">react typescript boilerplate</h2>
            <Counter />
        </div>
    );
}

export default hot(About);
