import { defaults, get } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import { setUser } from './features/auth/authSlice';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { Home } from './Home/Home';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { Water } from './Water/Water';
import { WaterLeaderboard } from './Water/WaterLeaderboard/WaterLeaderboard';
import { WaterTrack } from './Water/WaterTrack/WaterTrack';
import { WaterTrends } from './Water/WaterTrends/WaterTrends';

function App() {
  // make axios client save cookies
  defaults.withCredentials = true;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) =>
    state.auth.user ? state.auth.user.username : null
  );

  useEffect(() => {
    // get the user information through the session cookie
    dispatch(getUserActionCreator());

    if (username !== null) {
      // there is a valid user navigate them to the water track page
      console.log('navigate them to the water track page');
      navigate('/water/track');
    } else {
      navigate('/signin');
    }
  }, [username]);

  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/water" element={<Water />}>
          <Route path="/water/track" element={<WaterTrack />} />
          <Route path="/water/trends" element={<WaterTrends />} />
          <Route path="/water/leaderboard" element={<WaterLeaderboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

function getUserActionCreator() {
  return async function getUserAction(dispatch, getState) {
    const response = await get(`http://localhost:8000/auth/user/`);
    dispatch(setUser(response.data));
  };
}
