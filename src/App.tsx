import React from "react";
import Todos from "./components/Todos";

function App() {

  return (
    <div>
      <Todos items={['Learn React', 'and something']} />
    </div>
  );
}

export default App;
