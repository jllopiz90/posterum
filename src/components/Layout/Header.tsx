import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image"

import { SunIcon, MoonIcon } from "../icons";
import "./header.css";

const OctocatImage = () => (
  <StaticImage 
    src="../../images/Octocat-removebg-preview.png"
    alt="Github Profile"
    placeholder="blurred"
    className="grow"
    width={40}
    height={40}
  />
)

const toogleColors = (currentMode: boolean) => {
  document.documentElement.style.setProperty(
    "--main-bg-color",
    currentMode ? "#fff" : "#000"
  );
  document.documentElement.style.setProperty(
    "--main-text-color",
    currentMode ? "#000" : "#fff"
  );
  document.documentElement.style.setProperty(
    "--button-bright",
    currentMode ? "80%" : "120%"
  );
  document.documentElement.style.setProperty(
    "--sky-color",
    currentMode ? "#276779" : "#61dafb"
  );
};

const Header = () => {
  const [nightMode, setMode] = useState(true);
  return (
    <>
      <header>
        <span>
          <a href="https://github.com/jllopiz90" target="_new">
            <OctocatImage />
          </a>
        </span>
        <button
          onClick={() => {
            toogleColors(nightMode);
            setMode(!nightMode);
          }}
          className="button grow"
        >
          {nightMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </header>
      <div style={{ width: "100%", position: 'relative' }}>
        <div className="border-slide-start" />
      </div>
    </>
  );
};

export default Header;
