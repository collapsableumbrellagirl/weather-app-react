import React from "react";
import "./MainTemp.css";

export default function MainTemp(props) {
  return (
    <div className="row MainTemp">
      <span id="MainDegreenNumber">{props.MainDegreenNumber}°</span>
    </div>
  );
}
