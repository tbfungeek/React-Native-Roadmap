import React, { useState , useCallback} from 'react';
import Child from './child';

//https://blog.dkvirus.top/frontend/react/hook_callback_memo.html

export default function Parent(props) {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div onClick={increase}>点击:{count}次</div>
      <Child/>
    </div>
  );
}
