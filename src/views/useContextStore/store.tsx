import React, { createContext, useReducer } from 'react';

export const ColorContext: any = createContext({});

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.num;
    case DECREMENT:
      return state - action.num;
    default:
      return state;
  }
};

export const StoreWrap = (props: any) => {
  const [count, dispatch] = useReducer(reducer, 1);
  return (
    <ColorContext.Provider value={{ count, dispatch }}>{props.children}</ColorContext.Provider>
  );
};
