import "./WaterTrack.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faSquare } from "@fortawesome/free-solid-svg-icons";

export function WaterTrack() {
  return (
    <div id="watertrack-body">
      <div id="streak">🔥 Streak: 503 days</div>
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
        <div id="num-cups">4/8</div>
        <div id="bar-percentage">
          <div id="bar"></div>
          <div id="percentage">50%</div>
        </div>
        <div id="reset">Reset</div>
      </div>
    </div>
  );
}
