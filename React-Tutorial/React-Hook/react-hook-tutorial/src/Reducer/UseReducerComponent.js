import React, { useReducer } from "react";

export function UseReducerComponent(props) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return {
          ...state,
          count: state.count + 1
        };
      case "minus":
        return {
          ...state,
          count: state.count - 1
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <div>{state.count}</div>
      <button
        onClick={() => {
          dispatch({
            type: "add"
          });
        }}
      >
        加
      </button>

      <button
        onClick={() => {
          dispatch({
            type: "minus"
          });
        }}
      >
        减
      </button>
    </div>
  );
}
