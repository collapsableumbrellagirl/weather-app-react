import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import _ from "lodash";
import WeatherIcon from "./WeatherIcon";
import { getDisplayTemp } from "./utils";

export default function Forecast(props) {
  const [forecast, setForecast] = useState(null);

  React.useEffect(() => {
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let unit = `imperial`;
    const apiKey = `152b1703b6524168cc20a42fdd50708d`;

    if (lat && lon) {
      let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
      axios.get(apiUrl).then(setForecast);
    }
  }, [props.coords.lon, props.coords.lat]);

  if (!forecast) {
    return <div> Loading...</div>;
  }

  //The free API from Open Weather has no daily max or min temperatures, just max/min temps for each 3 hour time interval over 5 days. I installed lodash to help me take all the max and min temps every 3 hours over 5 days, grouped the max and min temps by date, and then for each date it pulled the hottest and coldest temps to be the daily min and max temps for the upcoming days.

  const temperatures = forecast.data.list.map((item) => ({
    timestamp: item.dt_txt,
    maxtemperature: item.main.temp_max,
    mintemperature: item.main.temp_min,
    iconID: item.weather[0].id,
  }));

  //format timestamp to a date string representing the day

  const getDayFromTimestamp = (timestamp) => {
    return timestamp.split(" ")[0];
  };

  //Group temperatures by day

  const groupTemperatures = _.groupBy(temperatures, (temp) =>
    getDayFromTimestamp(temp.timestamp)
  );
  console.log(groupTemperatures);

  const minMaxTemperatures = _.mapValues(groupTemperatures, (temps) => {
    const minTemperaturesOnly = temps.map((temps) => temps.mintemperature);
    const maxTemperaturesOnly = temps.map((temps) => temps.maxtemperature);

    return {
      min: _.min(minTemperaturesOnly),
      max: _.max(maxTemperaturesOnly),
      iconID: temps[0].iconID,
    };
  });

  console.log(minMaxTemperatures);

  //Get the next 4 days
  const days = Object.keys(minMaxTemperatures).slice(0, 6); //sliced it as (1,5) to exclude the current date

  return (
    <div className="row Forecast">
      {days.map((day, index) => {
        const date = new Date(day);
        const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

        return (
          <div key={index} className="box WeekForecast">
            <div className="DayOfWeekForecast">{dayName}</div>

            <WeatherIcon iconID={minMaxTemperatures[day].iconID} />
            <div className="MaxTemp">
              {Math.round(
                getDisplayTemp(props.tempUnit, minMaxTemperatures[day].max)
              )}
              °
            </div>
            <div className="MinTemp">
              {Math.round(
                getDisplayTemp(props.tempUnit, minMaxTemperatures[day].min)
              )}
              °
            </div>
          </div>
        );
      })}
    </div>
  );
}
