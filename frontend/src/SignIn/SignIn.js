import "./SignIn.scss";
import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div id="signin-body">
      <div id="signin-box">
        <div id="signin-welcome">Welcome!</div>
        <div>
          <input
            class="signin-input"
            type="text"
            placeholder="Username"
          ></input>
        </div>
        <div>
          <input
            class="signin-input"
            type="text"
            placeholder="Password"
          ></input>
        </div>
        <div>
          <button id="signin-submit" type="submit">
            Sign In
          </button>
        </div>
        <Link to="/signup" id="signin-signup">
          Don't have an account? Sign up here.
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
