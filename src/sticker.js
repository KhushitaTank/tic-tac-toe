import { useEffect, useState } from "react";
import ellispe from "./svg/ellispe.svg";

function Sticker() {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const Data = await response.json();
      setData(Data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {data ? (
        <div className="sticker">
          <h1 className="stickerHeading">Quote #{data.slip.id}</h1>
          <p className="stickerContain">{data.slip.advice}</p>
          <img src={ellispe}></img>
        </div>
      ) : (
        <div className="sticker">
          <h1 className="stickerHeading">Quote #1</h1>
          <p className="stickerContain">
            “It is better to fail in originality than to succeed in imitation”
          </p>
          <img src={ellispe}></img>
        </div>
      )}
    </div>
  );
}

export default Sticker;
