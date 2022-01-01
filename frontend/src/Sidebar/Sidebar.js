import "./Sidebar.scss";
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div id="sidebar-body">
      <div class="sidebar-link" id="selected-link">
        <Link to="/water/track">Water Track</Link>
      </div>
      <div class="sidebar-link">
        <Link to="/water/trends">Water Trends</Link>
      </div>
      <div class="sidebar-link">
        <Link to="/water/leaderboard">Water Leaderboard</Link>
      </div>
    </div>
  );
}

export default Sidebar;
