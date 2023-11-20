import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPlayAgain({
  userSelected,
  resetFunction,
  setShowNextRound,
  PlayAgainfunction,
}) {
  const navigate = useNavigate();

  const quit = () => {
    localStorage.removeItem("userSelected");
    localStorage.removeItem("userScore");
    localStorage.removeItem("computerScore");
    localStorage.removeItem("tieCount");

    navigate("/");
  };

  const playAgain = () => {
    setShowNextRound(false);
    navigate("/game", { state: { userSelected } });
    PlayAgainfunction();
    resetFunction();
    localStorage.removeItem("userScore");
    localStorage.removeItem("computerScore");
    localStorage.removeItem("tieCount");
  };

  return (
    <div>
      <div className="resetInfo">
        <p className="resetHeading">Do you want to quit ?</p>
        <div className="resetButtons">
          <button onClick={playAgain} className="playAgainButton">
            PLAY AGAIN
          </button>
          <button onClick={quit} className="quitButton">
            QUIT
          </button>
        </div>
      </div>
    </div>
  );
}
