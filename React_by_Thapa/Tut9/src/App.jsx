import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
  <>
      <Button handleClick={handleClick} text="Click me!">
        <h1>{count}</h1>
      </Button>
      
      {/* <Card name="Uttam Roy ">
        <h1>Best WEB DEV Course</h1>
        <p>From Zero to Hero</p>
        <p>This course will make you Developer bro...</p>
      </Card> */}
    </>
  );
}

export default App;
