import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>Click me</button>
      </div>
      <ChildComponent count={count} />
    </>
  );
};

export default UseState;

function ChildComponent({count}) {
  console.log("Child Component Rendered");
  return <div>Child Component {count}</div>;
}