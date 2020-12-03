import React, { useContext } from 'react';
import { UserContext } from './userContext';
import { Input } from 'antd';

export default function(props) {
  const { state, dispatch } = useContext(UserContext);

  const handleLogin = () => {
    dispatch({
      type: 'LOGIN',
      payload: state.isLogin ? false : true,
    });

    dispatch({
      type: 'NICKNAME',
      payload: state.isLogin ? "tbfungeek" : "",
    });

    dispatch({
      type: 'AGE',
      payload: state.isLogin ? "29" : "",
    });
  };

  return (
    <div>
      <div>{state.nickname}</div>
      <div>{state.age}</div>
      <button onClick={handleLogin}> {state.isLogin ? '退出登陆' : '登陆'}</button>
    </div>
  );
}
