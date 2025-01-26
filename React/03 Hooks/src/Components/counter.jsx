import { useState } from "react";
import "./counter.css";

function counter() {
  const [count, setCount] = useState(0);
  return (
    <div id="container">
      <div className="para">You clicked {count} times</div>
      <button id="btn" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default counter;
