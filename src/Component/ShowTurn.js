import blackCross from "../svg/blackWhiteCross.svg";
import blackCircle from "../svg/blackWhiteCircle.svg";
import { useEffect, useState } from "react";

function ShowTurn({ userSelected, turn, computerSelected }) {
  const [showTurn, setShowTurn] = useState();

  useEffect(() => {
    if (turn == "user") {
      if (userSelected == "O") setShowTurn(true);
      if (userSelected == "X") setShowTurn(false);
    } else if (turn == "computer") {
      if (computerSelected == "O") setShowTurn(true);
      if (computerSelected == "X") setShowTurn(false);
    }
  }, [turn, showTurn]);

  return showTurn ? (
    <div className="showTurn">
      <img src={blackCircle} className="showTurnImg" />
      <p className="showTurnPara">Turn</p>
    </div>
  ) : (
    <div className="showTurn">
      <img src={blackCross} className="showTurnImg" />
      <p className="showTurnPara">Turn</p>
    </div>
  );
}

export default ShowTurn;
