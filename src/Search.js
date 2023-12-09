import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

function Search({ setWeather }) {
  const [query, setQuery] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    let unit = `imperial`;
    let apikey = `87b9752c714fbde6317ef3900b3d8fb6`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&appid=${apikey}`;
    axios.get(url).then(function (response) {
      setWeather(response.data);
    });
  }

  function handleQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        type="search"
        className="City"
        placeholder="Enter a city name"
        onChange={handleQuery}
      />
      <button type="submit" className="btn-md Searching">
        Search
        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
      </button>
      <button type="button" className="btn-md Location">
        <i className="fa-solid fa-location-arrow fa-beat-fade Locationicon"></i>
      </button>
    </form>
  );
}
export default Search;
