import React, { useState } from "react";

import { SunIcon, MoonIcon } from '../icons';
import "./header.css";
//@ts-ignore
import Octocat from "../../images/Octocat-removebg-preview.png";

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
    <header>
      <span>
        <a href="https://github.com/jllopiz90" target="_new">
          <img src={Octocat} alt="github" width="40px" className="grow" />
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
  );
};

export default Header;
