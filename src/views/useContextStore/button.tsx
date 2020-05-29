import React, { useContext } from 'react';
import { ColorContext, DECREMENT, INCREMENT } from './store';

function Buttons() {
  const { dispatch } = useContext(ColorContext);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: INCREMENT, num: 1 });
        }}
      >
        增加
      </button>
      <button
        onClick={() => {
          dispatch({ type: DECREMENT, num: 1 });
        }}
      >
        减少
      </button>
    </div>
  );
}

export default Buttons;
