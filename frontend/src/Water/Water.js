import "./Water.scss";
import React from "react";
import { Link, Outlet } from "react-router-dom";

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

      <Outlet></Outlet>
    </div>
  );
}
