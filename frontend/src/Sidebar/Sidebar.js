import "./Sidebar.scss";
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div id="sidebar-body">
      <Link to="/water/track" class="sidebar-link" id="selected-link">
        Water Track
      </Link>
      <Link to="/water/trends" class="sidebar-link">
        Water Trends
      </Link>
      <Link to="/water/leaderboard" class="sidebar-link">
        Water Leaderboard
      </Link>
    </div>
  );
}

export default Sidebar;
