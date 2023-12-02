import React from "react";
import "./MainTemp.css";

export default function MainTemp({ temp }) {
  return (
    <div className="row MainTemp align-items-center justify-content-center text-center">
      <span id="MainDegreenNumber"> {Math.round(temp)}°</span>
    </div>
  );
}
