import React, { useState } from "react";
import Page2 from "./Page2.js";

function App() {
  const [showPage2, setShowPage2] = useState(false);
  return (
    <div className="App">
      <header>
        <p>YOOOO THIS DEPLOYMENT WORKS.</p>
        <button
          onClick={() => {
            alert("You clicked me!");
          }}
        >
          Click me
        </button>
        <p>Click the button to see an alert.</p>

        <button onClick={() => setShowPage2(!showPage2)}>
          {showPage2 ? "Hide" : "Show"} Page 2
        </button>

        {showPage2 && <Page2 />}
      </header>
    </div>
  );
}

export default App;
