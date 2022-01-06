import "./WaterTrack.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faSquare } from "@fortawesome/free-solid-svg-icons";

export function WaterTrack() {
  const streak = 503;
  const denominator = 8;

  const [numerator, setNumerator] = React.useState(4);
  let [percentage, setPercentage] = React.useState(50);

  const minusFunction = () => {
    let newNumerator = numerator - 1;
    if (newNumerator < 0) {
      newNumerator = 0;
    }
    setNumerator(newNumerator);
    setPercentage(Math.round((newNumerator / denominator) * 100));
  };

  const plusFunction = () => {
    let newNumerator = numerator + 1;
    setNumerator(newNumerator);
    if (percentage === 100) {
      setPercentage(100);
    } else {
      setPercentage(Math.round((newNumerator / denominator) * 100));
    }
  };

  const resetFunction = () => {
    setNumerator(0);
    setPercentage(0);
  };

  return (
    <div id="watertrack-body">
      <div id="streak">🔥 Streak: {streak} days</div>
      <div id="icons">
        <div class="plus-minus">
          <FontAwesomeIcon icon={faMinus} id="minus" onClick={minusFunction} />
        </div>
        <div id="cup">
          <FontAwesomeIcon icon={faSquare} />
        </div>
        <div class="plus-minus">
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
              style={{ width: percentage + "%" }}
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
