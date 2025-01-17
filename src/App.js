import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Page2 from "./Page2";
import Page3 from "./Page3";
import "./app.css";


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <Link to="/">Home</Link> | <Link to="/page2">Page 2</Link> |{" "}
            <Link to="/page3">Page 3</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;