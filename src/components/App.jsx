import React from "react";

function App() {
  var [count, setCount] = React.useState(0);

  function call() {
    setCount(count + 1);
  }
  function minus() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={call}>+</button>
      <button onClick={minus}>- </button>
    </div>
  );
}

export default App;
