import React, { useRef } from 'react';

export default function(props) {
  let ref = useRef();

  const handleClick = () => {
    ref.current.value = '修改后的值';
  };

  return (
    <div>
      <input ref={ref} />
      <button onClick={handleClick}>通过ref修改input的值</button>
    </div>
  );
}
