import colorCircle from "./svg/colorCircle.svg";

function Circle() {
  return (
    <div className="circle new-tile">
      <img src={colorCircle} className="circleImg" />
    </div>
  );
}

export default Circle;
