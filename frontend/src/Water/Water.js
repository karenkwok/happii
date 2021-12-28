import "./Water.scss";
import { WaterTrack } from "./WaterTrack/WaterTrack";
import { WaterTrends } from "./WaterTrends/WaterTrends";
import { WaterLeaderboard } from "./WaterLeaderboard/WaterLeaderboard";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export function Water() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/water/track">WaterTrack</Link>
          </li>
          <li>
            <Link to="/water/trends">WaterTrends</Link>
          </li>
          <li>
            <Link to="/water/leaderboard">WaterLeaderboard</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/water/track" element={<WaterTrack />} />
        <Route path="/water/trends" element={<WaterTrends />} />
        <Route path="/water/leaderboard" element={<WaterLeaderboard />} />
      </Routes>
    </div>
  );
}
