import "./App.scss";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Header from "./Header/Header";
import { Home } from "./Home/Home";
import { Water } from "./Water/Water";
import { WaterTrack } from "./Water/WaterTrack/WaterTrack";
import { WaterTrends } from "./Water/WaterTrends/WaterTrends";
import { WaterLeaderboard } from "./Water/WaterLeaderboard/WaterLeaderboard";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { defaults, get } from 'axios';
import { setUser } from "./features/auth/authSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  // make axios client save cookies
  defaults.withCredentials = true;

  // get the user information through the session cookie
  dispatch(getUserActionCreator());

  return (
    <Router>
      <Header></Header>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/water" element={<Water />}>
            <Route path="/water/track" element={<WaterTrack />} />
            <Route path="/water/trends" element={<WaterTrends />} />
            <Route path="/water/leaderboard" element={<WaterLeaderboard />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

function getUserActionCreator() {
  return async function getUserAction(dispatch, getState) {
    const response = await get(`http://localhost:8000/auth/user/`);
    dispatch(setUser(response.data));
  };
}
