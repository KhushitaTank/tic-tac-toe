import reset from "../svg/reset.svg";
import ResetInfo from "./resetInfo";
import ResetPlayAgain from "./resetPlayAgain";
import { useEffect, useState } from "react";

function Reset({ userSelected, resetFunction, complete, PlayAgainfunction }) {
  const [showNextRound, setShowNextRound] = useState(false);
  const [isResetClicked, setIsResetClicked] = useState(false);
  const handleReset = () => {
    setShowNextRound(true);
  };

  useEffect(() => {
    setShowNextRound(false);
  }, []);

  useEffect(() => {
    if (complete) {
      setIsResetClicked(true);
    } else {
      setIsResetClicked(false);
      setShowNextRound(false);
    }
  }, [complete]);
  return (
    <div className="resetButton">
      <button className="reset">
        <img src={reset} onClick={handleReset} />
      </button>
      {showNextRound && (
        <ResetPlayAgain
          userSelected={userSelected}
          resetFunction={resetFunction}
          setShowNextRound={setShowNextRound}
          PlayAgainfunction={PlayAgainfunction}
        />
      )}
      {isResetClicked && (
        <ResetInfo userSelected={userSelected} resetFunction={resetFunction} />
      )}
    </div>
  );
}

export default Reset;
