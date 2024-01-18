import React from "react";
import "./BgChanger.css";

const BgChanger = () => {
  const colors = [
    "Red",
    "Yellow",
    "Black",
    "Purple",
    "Green",
    "Blue",
    "Default",
  ];

  return (
    <div className="bgChanger">
      <div className="colors">
        {colors.map((color) => (
          <ColorBtn key={color} color={color} />
        ))}
      </div>
    </div>
  );
};

const changeColor = (e) => {
  document.body.style.backgroundColor = e.target.style.backgroundColor;
};

const ColorBtn = ({ color }) => {
  const btnColor = color != "Default" ? color.toLowerCase() : "orange";
  const fontColor = btnColor == "black" ? "white" : "black";
  return (
    <div
      className="colorBtn"
      style={{ backgroundColor: btnColor, color: fontColor }}
      onClick={(e) => {
        changeColor(e);
      }}
    >
      {color}
    </div>
  );
};

export default BgChanger;
