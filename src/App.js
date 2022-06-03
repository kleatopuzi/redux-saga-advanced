import React from "react";
import UseReducerExample from "./components/use-reducer-example/use-reducer.component";
import SagasExample from "./components/sagas-example/sagas-example.component";

import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <UseReducerExample />
      {/* <SagasExample /> */}
    </div>
  );
};

export default App;
