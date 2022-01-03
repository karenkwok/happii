import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";

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
        <div id="stars">⭐⭐⭐⭐⭐⭐⭐</div>
        <div id="initials">KK</div>
      </div>
    </header>
  );
}

export default Header;
