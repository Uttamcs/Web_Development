import "./App.css";
import State from "./Hooks/State";

function App() {
  return (
    <>
      <State />
      <Sibling />
    </>
  );
}

export function Sibling() {
  console.log("Sibling Component rendered");
  return (
    <div>
      <h2>Sibling Component</h2>
    </div>
  )
}

export default App;
