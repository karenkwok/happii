import './Header.scss';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get } from 'axios';
import { useDispatch } from 'react-redux';
import { resetAuthState } from '../features/auth/authSlice';
import { resetWaterState, setWaterGoal } from '../features/water/waterSlice';

function Header() {
  const navigate = useNavigate();
  const today = new Date();
  const dd = String(today.getDate());
  const year = today.getFullYear();
  const dispatch = useDispatch();
  const numStars = useSelector((state) => state.water.waterGoal);

  dispatch(getWaterGoalActionCreator());

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

  const star = '⭐';
  let stars = '';
  for (let i = 0; i < numStars; i++) {
    stars = stars + star;
  }

  const username = useSelector((state) =>
    state.auth.user ? state.auth.user.username : null
  );

  const logoutFunction = () => {
    dispatch(logoutActionCreator(navigate));
  };

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

function logoutActionCreator(navigate) {
  return async function logoutAction(dispatch, getState) {
    await get(`/auth/signout/`);

    dispatch(resetAuthState());
    dispatch(resetWaterState());

    // navigate users to sign in page
    navigate('/signin/');
  };
}

// createUser is the "thunk action creator"
function getWaterGoalActionCreator() {
  // createUserThunk is the "thunk function"
  return async function getWaterGoalAction(dispatch, getState) {
    const response = await get(
      `/water/goal/?date_period=weekly`
    );
    dispatch(setWaterGoal(response.data));
  };
}
