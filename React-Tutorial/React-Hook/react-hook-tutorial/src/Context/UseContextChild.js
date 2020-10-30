import React, { useContext } from "react";
import Context from "./ContextManager";

function UseContextChild1(props) {
  const { count, setCount } = useContext(Context);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      点我!
    </button>
  );
}

function UseContextChild2(props) {
  const { count } = useContext(Context);

  return <div>{count}</div>;
}

export { UseContextChild1, UseContextChild2 };
