import { useEffect } from "react";

function Computer({ winner, setComputerScore, computerScore }) {
  const computerScoreIncrement = () => {
    if (winner == "computer") {
      setComputerScore(computerScore + 1);
      localStorage.setItem("computerScore", computerScore + 1);
      localStorage.getItem("computerScore");
    } else {
      setComputerScore(computerScore);
      localStorage.setItem("computerScore", computerScore);
      localStorage.getItem("computerScore");
    }
  };

  useEffect(() => {
    computerScoreIncrement();
  }, [winner === "computer"]);
  return (
    <div className="computerSection">
      <h6 className="computer">PC</h6>
      <p className="computerScore">{computerScore}</p>
    </div>
  );
}

export default Computer;
