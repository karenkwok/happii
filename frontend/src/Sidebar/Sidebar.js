import './Sidebar.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div id="sidebar-body">
      <Link to="/water/track" className="sidebar-link" id="selected-link">
        Water Track
      </Link>
      <Link to="/water/trends" className="sidebar-link">
        Water Trends
      </Link>
      <Link to="/water/leaderboard" className="sidebar-link">
        Water Leaderboard
      </Link>
    </div>
  );
}

export default Sidebar;
