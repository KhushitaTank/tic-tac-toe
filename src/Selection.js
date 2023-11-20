function Selection({ setSelected, index }) {
  return (
    <div className="new-tile">
      <button
        className="tile"
        onClick={() => {
          setSelected(index);
        }}></button>
    </div>
  );
}

export default Selection;
