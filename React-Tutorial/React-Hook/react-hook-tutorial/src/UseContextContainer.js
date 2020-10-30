import { useState } from "react";
import { UseContextChild1, UseContextChild2 } from "./UseContextChild";
import Context from "./ContextManager";

export function UseContextContainer(props) {
  const [count, setCount] = useState(0);

  return (
    <Context.Provider value={{ count,setCount }}>
      <UseContextChild1/>
      <UseContextChild2/>
    </Context.Provider>
  );
}
