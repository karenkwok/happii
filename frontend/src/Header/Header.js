import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div id="left-header">
        <div id="logo"><Link to="/">happii</Link></div>
        <div id="section"><Link to="/water">Water</Link></div>
        <div id="date">
          <div id="weekday">Saturday</div>
          <div id="month-day">Jan. 1</div>
          <div id="year">2022</div>
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
