import React, { useState } from 'react';

export default function HookUseState(props) {
  const [count, setCount] = useState(0);

  const handleClicked = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClicked}>Click me</button>
    </div>
  );
}
