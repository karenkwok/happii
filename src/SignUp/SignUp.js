import { post } from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../features/auth/authSlice';
import './SignUp.scss';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const onSignUpFormSubmit = () => {
    // Calls the thunk action creator, and passes the thunk function to dispatch
    dispatch(signUpActionCreator(username, password, email));
  };
  const onUsernameChange = (event) => setUsername(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.value);

  return (
    <div id="signup-body">
      <div id="signup-box">
        <div id="signup-welcome">Welcome!</div>
        <div>
          <input
            className="signup-input"
            type="text"
            placeholder="Email"
            onChange={onEmailChange}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            type="text"
            placeholder="Username"
            onChange={onUsernameChange}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            type="password"
            placeholder="Password"
            onChange={onPasswordChange}
          ></input>
        </div>
        <div>
          <button id="signup-submit" type="submit" onClick={onSignUpFormSubmit}>
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

// createUser is the "thunk action creator"
function signUpActionCreator(username, password, email) {
  // createUserThunk is the "thunk function"
  return async function signUpAction(dispatch, getState) {
    const response = await post(`http://localhost:8000/auth/signup/`, {
      username,
      password,
      email,
    });
    dispatch(setUser(response.data));
  };
}
