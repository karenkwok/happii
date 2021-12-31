import { post } from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../features/auth/authSlice";
import "./SignIn.scss";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSignInFormSubmit = () => {
    // Calls the thunk action creator, and passes the thunk function to dispatch
    dispatch(signInActionCreator(username, password));
  };
  const onUsernameChange = (event) => setUsername(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  return (
    <div id="signin-body">
      <div id="signin-box">
        <div id="signin-welcome">Welcome!</div>
        <div>
          <input
            class="signin-input"
            type="text"
            placeholder="Username"
            onChange={onUsernameChange}
          ></input>
        </div>
        <div>
          <input
            class="signin-input"
            type="password"
            placeholder="Password"
            onChange={onPasswordChange}
          ></input>
        </div>
        <div>
          <button id="signin-submit" type="submit" onClick={onSignInFormSubmit}>
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

// createUser is the "thunk action creator"
function signInActionCreator(username, password) {
  // createUserThunk is the "thunk function"
  return async function createLogin(dispatch, getState) {
    const response = await post(`http://localhost:8000/auth/signin/`, {
      username,
      password,
    });
    dispatch(setUser(response.data));
  };
}
