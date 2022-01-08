import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get } from 'axios';
import { useDispatch } from 'react-redux';

function Header() {
  const today = new Date();
  const dd = String(today.getDate());
  const year = today.getFullYear();
  const dispatch = useDispatch();

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'Jan. ',
    'Feb. ',
    'Mar. ',
    'Apr. ',
    'May ',
    'Jun. ',
    'Jul. ',
    'Aug. ',
    'Sep. ',
    'Oct. ',
    'Nov. ',
    'Dec. ',
  ];

  const day = days[today.getDay()];
  const month = months[today.getMonth()];

  const numStars = 5;
  const star = '⭐';
  let stars = '';
  for (let i = 0; i < numStars; i++) {
    stars = stars + star;
  }

  const username = useSelector((state) =>
    state.auth.user ? state.auth.user.username : null
  );

  const logoutFunction = () => {
    dispatch(logoutActionCreator());
  }

  return (
    <header>
      <div id="left-header">
        <div id="logo">
          <Link to="/">happii</Link>
        </div>
        <div id="section">
          <Link to="/water">Water</Link>
        </div>
        <div id="date">
          <div id="weekday">{day}</div>
          <div id="month-day">
            {month}
            {dd}
          </div>
          <div id="year">{year}</div>
        </div>
      </div>
      <div id="right-header">
        <div id="stars">{stars}</div>
        <div className="dropdown">
          <button className="dropbtn" id="initials">
            {username}
          </button>
          <div className="dropdown-content">
            <div onClick={logoutFunction}>Log Out</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

function logoutActionCreator() {
  return async function logoutAction(dispatch, getState) {
    const response = await get(
      `http://localhost:8000/auth/signout/`
    );
  };
}