import React from "react";
// import Icons from "./Weatherly - Original render copy 2/Cloud sunset.png";
import "./CurrentConditions.css";
import WeatherIcon from "./WeatherIcon";

export default function CurrentConditions({
  wordDescriptor,
  weatherIcon,
  currentTimeStamp,
  currentDate,
  day,
  currentHumidity,
  currentWindSpeed,
}) {
  return (
    <div className="row DailyOverview">
      <div className="left-panel box ">
        <div
          id="WordDescriptor"
          className="row align-items-center justify-content-center text-center"
        >
          {wordDescriptor}
        </div>
        <div id="CurrentTime">{currentTimeStamp}</div>
        <div id="CurrentDate">
          {currentDate}
          {day}
        </div>
      </div>
      <div className="middle-panel box  ">
        <WeatherIcon {...weatherIcon} />
      </div>
      <div className="right-panel box ">
        <div id="Humidity">
          <span className="CurrentReading">Humidity: </span>
          <span id="CurrentHumidity">{currentHumidity}%</span>
        </div>
        <div id="WindSpeed">
          <span className="CurrentReading"> Wind Speed: </span>
          <span id="CurrentWindSpeed">{Math.round(currentWindSpeed)} mph</span>
        </div>
      </div>
    </div>
  );
}
