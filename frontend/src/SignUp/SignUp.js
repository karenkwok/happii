import "./SignUp.scss";
import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div id="signup-body">
      <div id="signup-box">
        <div id="signup-welcome">Welcome!</div>
        <div>
          <input class="signup-input" type="text" placeholder="Email"></input>
        </div>
        <div>
          <input
            class="signup-input"
            type="text"
            placeholder="Username"
          ></input>
        </div>
        <div>
          <input
            class="signup-input"
            type="text"
            placeholder="Password"
          ></input>
        </div>
        <div>
          <button id="signup-submit" type="submit">
            Sign Up
          </button>
        </div>
        <Link to="/signin" id="signin-signup">
          Already have an account? Sign in here.
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
