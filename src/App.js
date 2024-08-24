import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import Conversion from "./Conversion";
import Cityheader from "./Cityheader";
import CurrentConditions from "./CurrentConditions";
import MainTemp from "./MainTemp";
// import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [tempUnit, setTempUnit] = useState("F");

  let cityName = weather ? weather.name : "";
  let wordDescriptor = weather ? weather.weather[0].description : "";
  let humidity = weather ? weather.main.humidity : "";
  let windSpeed = weather ? weather.wind.speed : "";
  let mainTemp = weather ? weather.main.temp : "";
  let iconID = weather ? weather.weather[0].id : "";
  let sunriseTime = weather ? weather.sys.sunrise : "";
  let sunsetTime = weather ? weather.sys.sunset : "";
  let currentTimeStamp = weather ? weather.dt : ""; //trying to figure this out
  let date = weather
    ? new Date(
        (weather.dt + weather.timezone + new Date().getTimezoneOffset() * 60) *
          1000
      )
    : new Date();

  console.log(weather);
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
        currentTimestamp={currentTimeStamp} //checking why this is appearing outside the div box and not appearing by month/day
        currentHumidity={humidity}
        currentWindSpeed={windSpeed}
      />
      <MainTemp
        temp={tempUnit === "C" ? ((mainTemp - 32) * 5) / 9 : mainTemp}
      />
      {/* <Forecast
        timeStamp={currentTimeStamp}
        weatherIcon={iconID}
        DayOfWeekForecast={["Mon", "Tue", "Wed", "Thur"]}
        MaxTemp={67}
        MinTemp={48}
      /> */}
      <Footer />
    </div>
  );
}
