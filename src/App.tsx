import React from "react";
import ClassApi from "./components/ClassApi";
import UserTable from "./components/HookApi";

function App() {
  return (
    <div className="App">
      <h1> Axios</h1>
      <UserTable />
      <ClassApi/>
    </div>
  );
}

export default App;
