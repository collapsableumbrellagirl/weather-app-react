import React from "react";
import "./MainTemp.css";

export default function MainTemp({ temp }) {
  return (
    <div className="row MainTemp">
      <span id="MainDegreenNumber"> {Math.round(temp)}°</span>
    </div>
  );
}
