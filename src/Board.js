import { useEffect, useState } from "react";
import Selection from "./Selection";
import Cross from "./cross";
import Circle from "./circle";

function Board({
  userSelected,
  data,
  setData,
  turn,
  setTurn,
  setComplete,
  computerSelected,
  winner,
  setWinner,
}) {
  function calculateWinner(newBoard) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i of lines) {
      let [a, b, c] = i;
      if (newBoard[a] == newBoard[b] && newBoard[b] == newBoard[c]) {
        return newBoard[a];
      }
    }
  }

  const decidedWinner = () => {
    if (calculateWinner(data) == userSelected) {
      setComplete(true);
      setWinner("user");
      return "user";
    } else if (calculateWinner(data) == computerSelected) {
      setComplete(true);
      setWinner("computer");
      return "computer";
    }
  };

  let Computer = () => {
    for (let i in data) {
      if (data[i] == "") {
        let newBoard = [...data];
        newBoard[i] = computerSelected;
        if (calculateWinner(newBoard) == computerSelected) {
          setData(newBoard);
          return null;
        }
      }
    }

    for (let i in data) {
      if (data[i] == "") {
        let newBoard = [...data];
        let newBoard2 = [...data];
        newBoard[i] = userSelected;
        newBoard2[i] = computerSelected;
        if (calculateWinner(newBoard) == userSelected) {
          setData(newBoard2);
          return null;
        }
      }
    }

    let availableIndex = [];

    data.map((k, i) => {
      if (k === "") {
        availableIndex.push(i);
      }
    });

    let computerChoice = Math.floor(
      Math.random() * (availableIndex.length - 1)
    );
    let ans = availableIndex.filter((i, j) => {
      if (j === computerChoice) {
        return i;
      }
    });

    data.forEach((element, i) => {
      if (ans[0] === i) {
        data.splice(i, 1, computerSelected);
      }
    });
  };

  let setSelected = (index) => {
    let newState = [...data];
    newState[index] = userSelected;
    setData(newState);
    setTurn("computer");
  };

  useEffect(() => {
    let winner2 = decidedWinner();

    if (winner2 == undefined) {
      if (turn == "computer") {
        Computer();
        setTurn("user");
      }
    }
  }, [turn]);

  useEffect(() => {
    // console.log("data 1", data.filter((i) => i == "").length);
    if (data.filter((i) => i == "").length == 0) {
      if (winner == "") setWinner("tie");
      setData(["", "", "", "", "", "", "", "", ""]);
      setComplete(true);
    }
  }, [data]);

  return (
    <div className="board">
      {data.map((v, k) => {
        if (v == "") {
          return <Selection setSelected={setSelected} index={k} />;
        }
        if (v == "X") {
          return <Cross />;
        }
        if (v == "O") {
          return <Circle />;
        }
      })}
    </div>
  );
}

export default Board;
