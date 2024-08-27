import React, { useState } from "react";
import "./Forecast.css";
import Icons from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {
  const [forecast, setForecast] = useState(null);

  console.log(forecast);

  const apiKey = `87b9752c714fbde6317ef3900b3d8fb6`;

  React.useEffect(() => {
    let lon = props.coords.lon;
    let lat = props.coords.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    axios.get(apiUrl).then(setForecast);
  }, [props]);

  if (!forecast) {
    return <div> Loading...</div>;
  }

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
