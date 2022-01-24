import './Sidebar.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [link1, setLink1] = React.useState('');
  const [link2, setLink2] = React.useState('');
  const [link3, setLink3] = React.useState('');

  const clickLink1 = () => {
    setLink1('selected-link');
    setLink2('');
    setLink3('');
  };

  const clickLink2 = () => {
    setLink1('');
    setLink2('selected-link');
    setLink3('');
  };

  const clickLink3 = () => {
    setLink1('');
    setLink2('');
    setLink3('selected-link');
  };

  return (
    <div id="sidebar-body">
      <Link
        to="/water/track"
        className={`sidebar-link ${link1}`}
        onClick={clickLink1}
      >
        Water Track
      </Link>
      <Link
        to="/water/trends"
        className={`sidebar-link ${link2}`}
        onClick={clickLink2}
      >
        Water Trends
      </Link>
      <Link
        to="/water/leaderboard"
        className={`sidebar-link ${link3}`}
        onClick={clickLink3}
      >
        Water Leaderboard
      </Link>
    </div>
  );
}

export default Sidebar;
