import React, { useContext } from 'react';
import { UserContext, UserProvider } from './userContext';


export default function HookContext(props) {

  const { state, dispatch } = useContext(UserContext);

  console.log(state)

  return (
    <UserProvider>
      <div>
        <input placeholder="姓名"></input>
        <input placeholder="年龄"></input>
        <button> {state.isLogin ? "退出登陆":"登陆"}</button>
      </div>
    </UserProvider>
  );
}

