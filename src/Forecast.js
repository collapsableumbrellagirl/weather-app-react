import React from "react";
import "./Forecast.css";
// import Icons from "./Weatherly - Original render copy 2/Cloud sunset.png";

export default function Forecast(props) {
  return (
    <div className="row Forecast">
      <div className="box WeekForecast">
        <div className="DayOfWeekForecast">{props.DayOfWeekForecast[0]}</div>
        {/* <img src={Icons} alt="sunset" className="img-fluid ForecastIcon" /> */}
        <div className="MaxTemp">{props.MaxTemp}°</div>
        <div className="MinTemp">{props.MinTemp}° </div>
      </div>
      <div className="box WeekForecast">
        <div className="DayOfWeekForecast">{props.DayOfWeekForecast[1]}</div>
        {/* <img src={Icons} alt="sunset" className="img-fluid ForecastIcon" /> */}
        <div className="MaxTemp">{props.MaxTemp}°</div>
        <div className="MinTemp">{props.MinTemp}° </div>
      </div>
      <div className="box WeekForecast">
        <div className="DayOfWeekForecast">{props.DayOfWeekForecast[2]}</div>
        {/* <img src={Icons} alt="sunset" className="img-fluid ForecastIcon" /> */}
        <div className="MaxTemp">{props.MaxTemp}°</div>
        <div className="MinTemp">{props.MinTemp}° </div>
      </div>
      <div className="box WeekForecast">
        <div className="DayOfWeekForecast">{props.DayOfWeekForecast[3]}</div>
        {/* <img src={Icons} alt="sunset" className="img-fluid ForecastIcon" /> */}
        <div className="MaxTemp">{props.MaxTemp}°</div>
        <div className="MinTemp"> {props.MinTemp}° </div>
      </div>
    </div>
  );
}
