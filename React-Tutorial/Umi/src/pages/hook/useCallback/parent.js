import React, { useState , useCallback} from 'react';
import Child from './child';

//https://blog.dkvirus.top/frontend/react/hook_callback_memo.html

export default function Parent(props) {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("nickname")

  const increase = () => {
    setCount(count + 1);
  };

  //useCallBack 之前
  /*const changeName = (nickName) => {
    setName(nickName)
  }*/

  //useCallBack 之后
  const changeName = useCallback((nickName) => {
    setName(nickName)
  },[]);

  return (
    <div>
      <div>{name}</div>
      <div onClick={increase}>点击:{count}次</div>
      <Child changeName = {changeName}/>
    </div>
  );
}
