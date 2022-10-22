import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

 const checkSize = () => {
    setSize([window.innerWidth, window.innerHeight]);
 }

 useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);

    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
 }, []);

  return (
    <>
      <h1>UseEffect Cleanup</h1>
      <h3>Window width: {size[0]} px</h3>
      <h3>Window height: {size[1]} px</h3>
    </>
  );
};

export default UseEffectCleanup;
