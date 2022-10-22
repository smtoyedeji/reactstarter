import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  console.log("render component");
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You have clicked ${count} times`;
    console.log("useEffect ran")
  });

  return (
    <>
      <h1>{count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button> 
    </>
  );
};

export default UseEffectBasics;

