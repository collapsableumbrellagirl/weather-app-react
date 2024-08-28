import React from "react";

const newWeatherDayIcon = {
  200: "Cloud angled rain zap.png",
  201: "Cloud angled rain zap.png",
  202: "Cloud angled rain zap.png",
  210: "Sun cloud Zap.png",
  211: "Sun cloud Zap.png",
  212: "Cloud 3 Zap.png",
  221: "Fast winds zaps.png",
  230: "Cloud angled rain zap.png",
  231: "Cloud angled rain zap.png",
  232: "Cloud angled rain zap.png",
  300: "Sun cloud little rain.png",
  301: "Sun cloud little rain.png",
  302: "Sun cloud angled rain.png",
  310: "Sun cloud angled rain.png",
  311: "Sun cloud angled rain.png",
  312: "Sun cloud angled rain.png",
  313: "Sun cloud angled rain.png",
  314: "Sun cloud angled rain.png",
  321: "Sun cloud angled rain.png",
  500: "Sun cloud little rain.png",
  501: "Sun cloud mid rain.png",
  502: "Sun cloud angled rain.png",
  503: "Sun cloud big rain.png",
  504: "Sun cloud angled rain.png",
  511: "Sun cloud hailstone",
  520: "Cloud angled rain.png",
  521: "Cloud angled rain.png",
  522: "Cloud angled rain.png",
  531: "Cloud angled rain.png",
  600: "Sun cloud little snow.png",
  601: "Sun cloud mid snow.png",
  602: "Big snow little snow.png",
  611: "Cloud hailstone.png",
  612: "Sun cloud hailstone.png",
  613: "Cloud hailstone.png",
  615: "Sun cloud hailstone.png",
  616: "Big snow little snow.png",
  620: "Sun cloud little snow.png",
  621: "Sun cloud mid snow.png",
  622: "Mid snow fast winds.png",
  701: "Sun slow wind.png",
  711: "Sun fast wind.png",
  721: "Sun cloud slow wind.png",
  731: "Sun fast wind.png",
  741: "Cloud slow wind.png",
  751: "Sun fast wind.png",
  761: "Sun cloud fast wind.png",
  762: "Cloud fast wind.png",
  771: "Fast winds zaps.png",
  781: "Tornado.png",
  800: "Sun.png",
  801: "Sun cloud.png",
  802: "Cloud.png",
  803: "Cloud.png",
  804: "Cloud.png",
};

const newWeatherNightIcon = {
  200: "Cloud angled rain zap.png",
  201: "Cloud angled rain zap.png",
  202: "Cloud angled rain zap.png",
  210: "Moon cloud zap.png",
  211: "Moon cloud zap.png",
  212: "Cloud 3 Zap.png",
  221: "Fast winds zaps.png",
  230: "Cloud angled rain zap.png",
  231: "Cloud angled rain zap.png",
  232: "Cloud angled rain zap.png",
  300: "Moon cloud little rain.png",
  301: "Moon cloud little rain.png",
  302: "Moon cloud angled rain.png",
  310: "Moon cloud angled rain.png",
  311: "Moon cloud angled rain.png",
  312: "Moon cloud angled rain.png",
  313: "Moon cloud angled rain.png",
  314: "Moon cloud angled rain.png",
  321: "Moon cloud angled rain.png",
  500: "Moon cloud little rain.png",
  501: "Moon cloud mid rain.png",
  502: "Moon coud angled rain.png",
  503: "Moon cloud big rain.png",
  504: "Moon coud angled rain.png",
  511: "Moon cloud hailstone.png",
  520: "Cloud angled rain.png",
  521: "Cloud angled rain.png",
  522: "Cloud angled rain.png",
  531: "Cloud angled rain.png",
  600: "Moon cloud little snow.png",
  601: "Moon cloud mid snow.png",
  602: "Big snow little snow.png",
  611: "Cloud hailstone.png",
  612: "Moon cloud hailstone.png",
  613: "Cloud hailstone.png",
  615: "Moon cloud hailstone.png",
  616: "Big snow little snow.png",
  620: "Moon cloud little snow.png",
  621: "Moon cloud mid snow.png",
  622: "Mid snow fast winds.png",
  701: "Moon slow wind.png",
  711: "Moon fast wind.png",
  721: "Moon cloud slow wind.png",
  731: "Moon fast wind.png",
  741: "Cloud slow wind.png",
  751: "Moon fast wind.png",
  761: "Moon cloud fast wind.png",
  762: "Cloud fast wind.png",
  771: "Fast winds zaps.png",
  781: "Tornado.png",
  800: "Moon stars.png",
  801: "Moon cloud.png",
  802: "Cloud.png",
  803: "Cloud.png",
  804: "Cloud.png",
};

function isDayTime(sunriseTime, sunsetTime, currentTimeStamp) {
  return currentTimeStamp > sunriseTime && currentTimeStamp < sunsetTime;
}

function isDefined(sunriseTime, sunsetTime, currentTimeStamp) {
  return sunriseTime && sunsetTime && currentTimeStamp;
}

function WeatherIcon({ iconID, sunriseTime, sunsetTime, currentTimeStamp }) {
  let iconsDir = `/Weatherly-icon-render`;

  let src =
    !isDefined(sunriseTime, sunsetTime, currentTimeStamp) ||
    isDayTime(sunriseTime, sunsetTime, currentTimeStamp)
      ? `${iconsDir}/${newWeatherDayIcon[iconID]}`
      : `${iconsDir}/${newWeatherNightIcon[iconID]}`;

  return (
    <img
      src={src}
      className="img-fluid align-middle"
      id="WeatherIcon"
      alt="icon"
    />
  );
}

export default WeatherIcon;
