import React from 'react'

export default React.forwardRef((props,ref)=> {
  return (
    <>
      forwardRef:<input ref={ref}/>
    </>
  )
})
