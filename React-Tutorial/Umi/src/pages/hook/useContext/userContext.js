import React, { useReducer } from 'react';

const initialState = {
  isLogin: false,
  nickname: 'xxxxx',
  age: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'Login':
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

const UserContext = React.createContext();

const UserProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
