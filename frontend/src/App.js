import "./App.scss";
import Header from "./Header/Header";
import { Home } from "./Home/Home";
import { Water } from "./Water/Water";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header></Header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/water">Water</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="water" element={<Water />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
