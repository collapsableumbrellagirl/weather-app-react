import React from "react";
import "./Cityheader.css";

export default function Cityheader(props) {
  return (
    <div className=" row Cityheader">
      <h1 className="CityName">{props.CityName}</h1>
    </div>
  );
}
