import React, { useReducer } from 'react';

const initialState = {
  isLogin: false,
  nickname: "",
  age: "",
};

const UserContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: action.payload,
      };
    case 'NICKNAME':
      return {
        ...state,
        nickname: action.payload,
      };
    case 'AGE':
      return {
        ...state,
        age: action.payload,
      };

    default:
      break;
  }
};

const UserContextProvider = (props)=>{
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      {props.children}
    </UserContext.Provider>
  )
}

export {
  UserContext,
  UserContextProvider
}
