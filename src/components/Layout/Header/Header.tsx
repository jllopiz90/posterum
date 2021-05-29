import React, { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

import { SunIcon, MoonIcon, KeyholeIcon, KeyIcon } from "../../icons";
import * as headerStyles from "./header.module.css";

const OctocatImage = () => (
  <StaticImage
    src="../../../images/Octocat-removebg-preview.png"
    alt="Github Profile"
    placeholder="blurred"
    className="grow"
    width={40}
    height={40}
  />
);

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
  document.documentElement.style.setProperty(
    "--shadow-color",
    currentMode ? "#61dafb" : "#fff"
  );
};

const Header = ({
  setMode,
  openMenu,
  openMenuMobile,
  nightMode,
}: {
  openMenuMobile: boolean;
  nightMode: boolean;
  openMenu: () => void;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--hide-opacity",
      !openMenuMobile ? "1" : "0"
    );
  }, [openMenuMobile]);

  return (
    <header>
      <div className={headerStyles.innerHeader}>
      <span>
        <a href="https://github.com/jllopiz90" target="_new">
          <OctocatImage />
        </a>
      </span>
      <div className={headerStyles.buttonsContainer}>
        <button
          onClick={() => {
            toogleColors(nightMode);
            setMode(!nightMode);
          }}
          className="button grow"
        >
          {nightMode ? <SunIcon /> : <MoonIcon />}
        </button>
        <button onClick={openMenu} className="button grow show-on-mobile">
          <KeyIcon size={16} color={nightMode ? "#eff31d" : "#d8a12a"} />
          <KeyholeIcon size={12} color={nightMode ? "#61dafb" : "#2763a8"} />
        </button>
      </div>
      </div>
      <div className={headerStyles.borderSliderWrapper}>
        <div className={headerStyles.borderSlide} />
      </div>
    </header>
  );
};

export default Header;
