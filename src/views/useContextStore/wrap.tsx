import React from 'react'
import Count from './count'
import Buttons from './button'
import { StoreWrap } from './store' //引入Color组件

function Wrap() {
  return (
    <div>
      <StoreWrap>
        <Count />
        <Buttons />
      </StoreWrap>
    </div>
  )
}

export default Wrap
