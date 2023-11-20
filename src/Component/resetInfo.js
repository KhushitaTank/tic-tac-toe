import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetInfo({ userSelected, resetFunction, complete }) {
  const navigate = useNavigate();
  const [play, setPlay] = useState(false);
  const playAgain = () => {
    setPlay(true);
    navigate("/game", { state: { userSelected } });
    resetFunction();
  };
  const quit = () => {
    localStorage.removeItem("userSelected");
    localStorage.removeItem("userScore");
    localStorage.removeItem("computerScore");
    localStorage.removeItem("tieCount");

    navigate("/");
  };

  return (
    <div className="resetInfo">
      <p className="resetHeading">Do you want to quit ?</p>
      <div className="resetButtons">
        <button onClick={quit} className="quitButton">
          QUIT
        </button>
        <button onClick={playAgain} className="playAgainButton">
          NEXT ROUND
        </button>
      </div>
    </div>
  );
}
