import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const today = new Date();
  const dd = String(today.getDate());
  const year = today.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan. ",
    "Feb. ",
    "Mar. ",
    "Apr. ",
    "May ",
    "Jun. ",
    "Jul. ",
    "Aug. ",
    "Sep. ",
    "Oct. ",
    "Nov. ",
    "Dec. ",
  ];

  const day = days[today.getDay()];
  const month = months[today.getMonth()];

  const numStars = 5;
  const star = "⭐";
  let stars = "";
  for (let i = 0; i < numStars; i++) {
    stars = stars + star;
  }

  const username = useSelector((state) =>
    state.auth.user ? state.auth.user.username : null
  );

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
        <div class="dropdown">
          <button class="dropbtn" id="initials">
            {username}
          </button>
          <div class="dropdown-content">
            <a>Log Out</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
