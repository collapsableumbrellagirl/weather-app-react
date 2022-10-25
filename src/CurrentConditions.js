import React from "react";
import Icons from "./Weatherly - Original render copy 2/Cloud sunset.png";
import "./CurrentConditions.css";

export default function CurrentConditions(props) {
  return (
    <div className="row DailyOverview">
      <div className="left-panel box ">
        <div id="WordDescriptor">{props.WordDescriptor}</div>
        <div id="CurrentTime">{props.CurrentTime}</div>
        <div id="CurrentDate">
          {props.CurrentDate}
          {props.Day}
        </div>
      </div>
      <div className="middle-panel box ">
        <img src={Icons} alt="sunset" className="img-fluid" id="WeatherIcon" />
      </div>
      <div className="right-panel box ">
        <div id="Humidity">
          <span className="CurrentReading">Humidity: </span>
          <span id="CurrentHumidity">{props.CurrentHumidity}%</span>
        </div>
        <div id="WindSpeed">
          <span className="CurrentReading"> Wind Speed: </span>
          <span id="CurrentWindSpeed">{props.CurrentWindSpeed} mph</span>
        </div>
      </div>
    </div>
  );
}
