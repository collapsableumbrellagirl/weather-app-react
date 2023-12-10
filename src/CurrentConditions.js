import React from "react";
import "./CurrentConditions.css";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";

export default function CurrentConditions({
  wordDescriptor,
  weatherIcon,
  currentTimestamp,
  currentHumidity,
  currentWindSpeed,
  date,
}) {
  return (
    <div className="row DailyOverview">
      <div className="left-panel box ">
        <div
          id="WordDescriptor"
          className="row align-items-center justify-content-center text-center"
        >
          <FormattedDate date={date} />
          {wordDescriptor}
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
