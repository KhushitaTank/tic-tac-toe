import { useEffect } from "react";

function User({ winner, setUserScore, userScore }) {
  const increaseNumber = () => {
    if (winner === "user") {
      setUserScore(userScore + 1);

      localStorage.setItem("userScore", userScore + 1);
      localStorage.getItem("userScore");
    } else {
      setUserScore(userScore);
      localStorage.setItem("userScore", userScore);
      localStorage.getItem("userScore");
    }
  };

  useEffect(() => {
    increaseNumber();
  }, [winner]);

  return (
    <div className="userSection">
      <h6 className="user">User</h6>
      <p className="userCount">{userScore}</p>
    </div>
  );
}

export default User;
