import React, { memo } from 'react';

function Child({ changeName }) {
  console.log('渲染Child 组件');

  const handleChangeName = () => {
    if (changeName) {
      changeName("修改后的NickName");
    }
  };
  return <div onClick={handleChangeName}>子组件</div>;
}

//export default Child;

export default memo(Child);
