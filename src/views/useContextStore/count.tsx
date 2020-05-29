import React, { useContext } from 'react'
import { ColorContext } from './store'

const Count = () => {
  const { count } = useContext(ColorContext)
  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

export default Count
