import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

function Search({ setWeather }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let apikey = `152b1703b6524168cc20a42fdd50708d`;
    let unit = `imperial`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&appid=${apikey}`;
    axios.get(url).then(function (response) {
      setWeather(response.data);
    });
  }

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        type="search"
        className="City"
        placeholder="Enter a city name"
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
      <button type="submit" className="btn-md Searching">
        Search
      </button>
      <button type="button" className="btn-md Location">
        <i className="fa-solid fa-location-arrow fa-beat-fade Locationicon"></i>
      </button>
    </form>
  );
}
export default Search;
