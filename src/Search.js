import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search">
      <input type="search" className="City" placeholder="Enter a city name" />
      <button type="submit" className="btn-md Searching">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <button type="button" className="btn-md Location">
        <i className="fa-solid fa-location-arrow fa-beat-fade Locationicon"></i>
      </button>
    </form>
  );
}
