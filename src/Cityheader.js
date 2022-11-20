import React from "react";
import "./Cityheader.css";

function Cityheader({ cityName }) {
  return (
    <div className="row Cityheader">
      <h1 className="CityName">{cityName}</h1>
    </div>
  );
}

export default Cityheader;
