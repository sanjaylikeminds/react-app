import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Community from "./Pages/Community";

import logo from "./manmatters-logo.png";
import "./App.css";
import Chatroom from "./Pages/Chatroom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="App-logo">
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Self Assessment</Link>
            </li>
            <li>
              <Link to="/">Choose Concern</Link>
            </li>
            <li>
              <Link to="/">All Products</Link>
            </li>
            <li>
              <Link to="/">New Launches</Link>
            </li>
            <li>
              <Link to="/">MM Blog</Link>
            </li>
            <li>
              <Link to="/">Book Consult</Link>
            </li>
            <li>
              <Link to="/chatroom">Chatroom</Link>
            </li>
            <li>
              <Link to="/community">MannKiBaat</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </header>

        <Routes>
          <Route path="/*" exact element={<Home />} />
          <Route path="/community/*" element={<Community />} />
          <Route path="/community/community_feed/*" element={<Community />} />
          {/* <Route path="/community/:communityId" element={<Community />} />
          <Route
            path="/community/:communityId/collabcard/:chatroomId"
            element={<Community />}
          />
          <Route
            path="/community/community_feed/:communityId/profile/:chatroomId"
            element={<Community />}
          /> */}

          <Route path="/chatroom/*" element={<Chatroom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
