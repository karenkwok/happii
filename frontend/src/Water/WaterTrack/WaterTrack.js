import "./WaterTrack.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faSquare } from "@fortawesome/free-solid-svg-icons";

export function WaterTrack() {
  const streak = "🔥 Streak: 503 days";
  const numCups = "4/8";
  const percentage = "50%";

  return (
    <div id="watertrack-body">
      <div id="streak">{streak}</div>
      <div id="icons">
        <div class="plus-minus">
          <FontAwesomeIcon icon={faMinus} />
        </div>
        <div id="cup">
          <FontAwesomeIcon icon={faSquare} />
        </div>
        <div class="plus-minus">
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
      <div id="progress">
        <div id="num-cups">{numCups}</div>
        <div id="bar-percentage">
          <div id="bar"></div>
          <div id="percentage">{percentage}</div>
        </div>
        <div id="reset">Reset</div>
      </div>
    </div>
  );
}
