import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./Search";
import Conversion from "./Conversion";
import Cityheader from "./Cityheader";
import CurrentConditions from "./CurrentConditions";
import MainTemp from "./MainTemp";
import Forecast from "./Forecast";
import axios from "axios";

import Footer from "./Footer";
import { getDisplayTemp } from "./utils";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [tempUnit, setTempUnit] = useState("F");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      let apikey = `152b1703b6524168cc20a42fdd50708d`;
      let unit = `imperial`;
      let locationWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=${unit}`;
      axios.get(locationWeatherUrl).then((response) => {
        setWeather(response.data);
      });
    });
  }, []);

  let cityName = weather ? weather.name : "";
  let coords = weather ? weather.coord : "";
  let wordDescriptor = weather ? weather.weather[0].description : "";
  let humidity = weather ? weather.main.humidity : "";
  let windSpeed = weather ? weather.wind.speed : "";
  let mainTemp = weather ? weather.main.temp : "";
  let iconID = weather ? weather.weather[0].id : "";
  let sunriseTime = weather ? weather.sys.sunrise : "";
  let sunsetTime = weather ? weather.sys.sunset : "";
  let currentTimeStamp = weather ? weather.dt : "";
  let date = weather
    ? new Date(
        (weather.dt + weather.timezone + new Date().getTimezoneOffset() * 60) *
          1000
      )
    : new Date();

  return (
    <div className="App container position-absolute top-50 start-50 translate-middle">
      <Search setWeather={setWeather} />
      <Conversion
        setTempUnit={setTempUnit}
        tempUnit={tempUnit}
        maintemp={mainTemp}
      />

      <Cityheader cityName={cityName} />
      <CurrentConditions
        date={date}
        wordDescriptor={wordDescriptor}
        weatherIcon={{ iconID, sunriseTime, sunsetTime, currentTimeStamp }}
        currentTimestamp={currentTimeStamp}
        currentHumidity={humidity}
        currentWindSpeed={windSpeed}
      />
      <MainTemp temp={getDisplayTemp(tempUnit, mainTemp)} />
      <Forecast
        timeStamp={currentTimeStamp}
        weatherIcon={iconID}
        coords={coords}
        tempUnit={tempUnit}
      />
      <Footer />
    </div>
  );
}
