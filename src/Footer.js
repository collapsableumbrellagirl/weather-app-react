import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small className="text-start footer-text">
        <span id="created-by">
          <i className="fa-brands fa-github-square"></i>
          <a
            href="https://github.com/vernbueno/weather-app-react"
            className="github-link text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <span id="github-link">Open source </span>
          </a>
          coded by <span id="my-name">V Bueno</span>, Hosted by
          <span id="hosting-name"> Netlify</span>
        </span>
      </small>
    </div>
  );
}
