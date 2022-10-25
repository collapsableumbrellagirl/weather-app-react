import React from "react";
import { createRoot } from "react-dom/client";

import Search from "./Search";
import "./App.css";
import Conversion from "./Conversion";
import Cityheader from "./Cityheader";
import Conditions from "./CurrentConditions";
import MainTemp from "./MainTemp";
import Forecast from "./Forecast";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="App">
    <Search />
    <Conversion />
    <Cityheader CityName="Elgin" />
    <Conditions
      WordDescriptor="Clear Skies"
      CurrentTime="12:15 pm"
      CurrentDate="Friday, Sep "
      Day={30}
      CurrentHumidity={80}
      CurrentWindSpeed={2}
    />
    <MainTemp MainDegreenNumber={50} />
    <Forecast
      DayOfWeekForecast={["Mon", "Tue", "Wed", "Thur"]}
      MaxTemp={67}
      MinTemp={48}
    />
    <Footer />
  </div>
);
