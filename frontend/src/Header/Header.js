import "./Header.scss";
import React from "react";

function Header() {
  return (
    <header>
      <div id="left-header">
        <div id="logo">happii</div>
        <div id="section">Water</div>
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
