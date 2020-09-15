import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Whatsapp App</h1>
      <div className="app__body">
        <Sidebar />
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
