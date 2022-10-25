import React from "react";
import "./Conversion.css";

export default function Conversion() {
  return (
    <div className=" Conversion ">
      <form>
        <div
          className="btn-group btn-group-toggle temp-units"
          aria-label="radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check btn-sm"
            name="btnradio"
            id="btn-celsius"
          />
          <label className="btn btn-sm btn-outline-light" htmlFor="btn-celsius">
            °C
          </label>

          <input
            type="radio"
            className="btn-check btn-sm"
            name="btnradio"
            id="btn-fahrenheit"
            defaultChecked
          />
          <label
            className="btn btn-sm btn-outline-light"
            htmlFor="btn-fahrenheit"
          >
            °F
          </label>
        </div>
      </form>
    </div>
  );
}
