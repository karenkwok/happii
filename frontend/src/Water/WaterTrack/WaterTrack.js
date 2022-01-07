import './WaterTrack.scss';
import { put, get } from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faSquare } from '@fortawesome/free-solid-svg-icons';
import { setDailyWater } from '../../features/water/waterSlice';
import { useSelector } from 'react-redux';

export function WaterTrack() {
  const dailyWater = useSelector((state) =>
    state.water.dailyWater
  );

  const dispatch = useDispatch();
  const streak = 503;
  const denominator = 8;

  let yourDate = new Date();
  const offset = yourDate.getTimezoneOffset();
  yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
  const today = yourDate.toISOString().split('T')[0];

  const [numerator, setNumerator] = React.useState(dailyWater);
  let [percentage, setPercentage] = React.useState(Math.round((dailyWater / denominator) * 100));

  const minusFunction = () => {
    let newNumerator = numerator - 1;
    if (newNumerator < 0) {
      newNumerator = 0;
    }
    setNumerator(newNumerator);
    setPercentage(Math.round((newNumerator / denominator) * 100));
    dispatch(waterTrackActionCreator(newNumerator, today));
  };

  const plusFunction = () => {
    let newNumerator = numerator + 1;
    setNumerator(newNumerator);
    if (percentage === 100) {
      setPercentage(100);
    } else {
      setPercentage(Math.round((newNumerator / denominator) * 100));
    }
    dispatch(waterTrackActionCreator(newNumerator, today));
  };

  const resetFunction = () => {
    setNumerator(0);
    setPercentage(0);
    dispatch(waterTrackActionCreator(0, today));
  };

  dispatch(getDailyWaterActionCreator(today));

  return (
    <div id="watertrack-body">
      <div id="streak">🔥 Streak: {streak} days</div>
      <div id="icons">
        <div className="plus-minus">
          <FontAwesomeIcon icon={faMinus} id="minus" onClick={minusFunction} />
        </div>
        <div id="cup">
          <FontAwesomeIcon icon={faSquare} />
        </div>
        <div className="plus-minus">
          <FontAwesomeIcon icon={faPlus} id="plus" onClick={plusFunction} />
        </div>
      </div>
      <div id="progress">
        <div id="num-cups">
          {numerator}/{denominator}
        </div>
        <div id="bar-percentage">
          <div id="bar">
            <div
              id="actualprogressofthebar"
              style={{ width: percentage + '%' }}
            ></div>
          </div>
          <div id="percentage">{percentage}%</div>
        </div>
        <div id="reset" onClick={resetFunction}>
          Reset
        </div>
      </div>
    </div>
  );
}

// createUser is the "thunk action creator"
function waterTrackActionCreator(intake, date) {
  // createUserThunk is the "thunk function"
  return async function waterTrackAction(dispatch, getState) {
    const response = await put(
      `http://localhost:8000/water/intake/?date=${date}`,
      {
        intake,
      }
    );
    // dispatch(setUser(response.data));
  };
}

// createUser is the "thunk action creator"
function getDailyWaterActionCreator(date) {
  // createUserThunk is the "thunk function"
  return async function getDailyWaterAction(dispatch, getState) {
    const response = await get(
      `http://localhost:8000/water/intake/?date=${date}`
    );
    dispatch(setDailyWater(response.data));
  };
}
