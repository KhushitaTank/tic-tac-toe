import colorCross from "./svg/colorCross.svg";
import colorCircle from "./svg/colorCircle.svg";
import blackWhiteCircle from "./svg/blackWhiteCircle.svg";
import blackWhiteCross from "./svg/blackWhiteCross.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sticker from "./sticker";
import InviteModal from "./InviteModal";

function HomePage() {
  const navigate = useNavigate();
  const [userSelected, setUserSelected] = useState("X");

  const handleClick = (e) => {
    if (e === 1) {
      setUserSelected("X");
      console.log("x");
    } else {
      setUserSelected("O");
      console.log("o");
    }
  };
  function startGame() {
    navigate("./game", { state: { userSelected } });
  }

  return (
    <div className="App">
      <Sticker />
      <main>
        <div className="homePage">
          <section className="section1">
            <img src={colorCross} />
            <img src={colorCircle} />
          </section>
          <section className="section2">
            <h1>PICK PLAYER</h1>
            <div className="userChoicesButton">
              <button
                onClick={() => {
                  handleClick(1);
                }}
                className={
                  "crossButton" + (userSelected == "X" ? " active" : "")
                }>
                <img src={blackWhiteCross}></img>
              </button>
              <button
                className={
                  "circleButton" + (userSelected == "O" ? " active" : "")
                }
                onClick={() => {
                  handleClick(-1);
                }}>
                <img src={blackWhiteCircle}></img>
              </button>
            </div>
          </section>
          <section className="section3">
            <button
              className="newGame"
              onClick={() => {
                startGame();
              }}>
              NEW GAME ( VS CPU )
            </button>
            <button className="newGame WithHuman">
              NEW GAME ( VS HUMAN ) Coming soon
            </button>
          </section>
          <section className="section4">
            <InviteModal />
          </section>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
