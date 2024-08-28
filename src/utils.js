export function convertFahrenheitToCelcius(temp) {
  return ((temp - 32) * 5) / 9;
}

export function getDisplayTemp(unit, temp) {
  return unit === "C" ? convertFahrenheitToCelcius(temp) : temp;
}
