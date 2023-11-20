import { useLocation } from "react-router-dom";
import Sticker from "./sticker";
import colorCross from "./svg/colorCross.svg";
import colorCircle from "./svg/colorCircle.svg";
import ShowTurn from "./Component/ShowTurn";
import Reset from "./Component/Reset";
import Computer from "./Result/Computer";
import Tie from "./Result/Ties";
import User from "./Result/User";
import { useState } from "react";
import Board from "./Board";

function TicTacToe() {
  const { state } = useLocation();

  let [turn, setTurn] = useState("user");
  let [complete, setComplete] = useState(false);
  let [winner, setWinner] = useState("");
  const [computerScore, setComputerScore] = useState(
    parseInt(localStorage.getItem("computerScore") ?? 0)
  );
  const [tieCount, setTieCount] = useState(
    parseInt(localStorage.getItem("tieCount") ?? 0)
  );
  const [userScore, setUserScore] = useState(
    parseInt(localStorage.getItem("userScore") ?? 0)
  );

  const [userSelected, setUserSelected] = useState(state.userSelected);

  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  const resetFunction = () => {
    setTurn("user");
    setComplete(false);
    setWinner("");
    setUserSelected(userSelected);
    setData(["", "", "", "", "", "", "", "", ""]);
  };

  const PlayAgainfunction = () => {
    setComputerScore(0);
    setTieCount(0);
    setUserScore(0);
  };

  let computerSelected = "";
  function computerSection() {
    if (userSelected === "X") {
      computerSelected = "O";

      localStorage.setItem("userSelected", userSelected);
      localStorage.setItem("computerSelected", computerSelected);
      localStorage.getItem("userSelected");
      localStorage.getItem("computerSelected");
    } else {
      computerSelected = "X";
      localStorage.setItem("userSelected", userSelected);
      localStorage.setItem("computerSelected", computerSelected);
      localStorage.getItem("userSelected");
      localStorage.getItem("computerSelected");
    }
  }
  computerSection();

  return (
    <div className="App">
      <Sticker />
      <main className="game">
        <div className="gameContainer">
          <div className="gameHeading">
            <div className="Logo">
              <img src={colorCross} />
              <img src={colorCircle} />
            </div>
            <div>
              <ShowTurn
                userSelected={userSelected}
                turn={turn}
                computerSelected={computerSelected}
              />
            </div>
            <div>
              <Reset
                userSelected={userSelected}
                resetFunction={resetFunction}
                complete={complete}
                PlayAgainfunction={PlayAgainfunction}
              />
            </div>
          </div>
          <div>
            <Board
              userSelected={userSelected}
              data={data}
              setData={setData}
              turn={turn}
              setTurn={setTurn}
              setComplete={setComplete}
              computerSelected={computerSelected}
              winner={winner}
              setWinner={setWinner}
            />
          </div>
          <div className="resultSection">
            <User
              winner={winner}
              setUserScore={setUserScore}
              userScore={userScore}
            />
            <Tie
              winner={winner}
              setTieCount={setTieCount}
              tieCount={tieCount}
            />
            <Computer
              winner={winner}
              setComputerScore={setComputerScore}
              computerScore={computerScore}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default TicTacToe;
