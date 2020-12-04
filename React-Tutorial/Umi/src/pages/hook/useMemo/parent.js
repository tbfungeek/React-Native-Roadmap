import React, { useState, useMemo } from 'react';
import Child from './child';

//https://blog.dkvirus.top/frontend/react/hook_callback_memo.html

export default function Parent(props) {
  const [count, setCount] = useState(0);

  const [name, setName] = useState('hi~');
  const [age, setAge] = useState(20);
  //使用useMemo之前
  //const info = { name, age };

  //使用useMemo之后
  const info = useMemo(() => ({ name, age }), []);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div onClick={increase}>点击:{count}次</div>
      <Child info={info} />
    </div>
  );
}
