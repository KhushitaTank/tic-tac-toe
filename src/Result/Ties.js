import { useEffect } from "react";

function Tie({ winner, setTieCount, tieCount }) {
  const tie = () => {
    if (winner == "tie") {
      setTieCount(tieCount + 1);
      localStorage.setItem("tieCount", tieCount + 1);
      localStorage.getItem("tieCount");
    } else {
      setTieCount(tieCount);
      localStorage.setItem("tieCount", tieCount);
      localStorage.getItem("tieCount");
    }
  };
  useEffect(() => {
    tie();
  }, [winner]);
  return (
    <div className="tieSection">
      <h6 className="tie">Tie</h6>
      <p className="tieCount">{tieCount}</p>
    </div>
  );
}

export default Tie;
