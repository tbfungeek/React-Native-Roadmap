import React, { memo } from 'react';

function Child(props) {
  console.log('渲染Child 组件');
  return <div>子组件</div>;
}

//export default Child;

export default memo(Child);
