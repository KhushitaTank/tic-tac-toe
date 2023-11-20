import colorCross from "./svg/colorCross.svg";

function Cross() {
  return (
    <div className="cross new-tile">
      <img src={colorCross} className="crossImg" />
    </div>
  );
}

export default Cross;
