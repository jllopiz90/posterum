import React, { useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { SunIcon, MoonIcon, KeyholeIcon, KeyIcon } from "../../icons";
import * as headerStyles from "./header.module.css";
import { ThemeMode } from "../../../functions/useDarkMode";

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

const Header = ({
  setMode,
  openMenu,
  openMenuMobile,
  nightMode,
}: {
  openMenuMobile: boolean;
  nightMode: boolean;
  openMenu: () => void;
  setMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
}) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--hide-opacity",
      !openMenuMobile ? "1" : "0"
    );
  }, [openMenuMobile]);

  const isCalendarPage =
    window.location.pathname === "/calendar" ||
    window.location.pathname === "/calendar/";

  return (
    <header>
      <div className={headerStyles.innerHeader}>
        {!isCalendarPage && (
          <>
            <span>
              <a href="https://github.com/jllopiz90" target="_new">
                <OctocatImage />
              </a>
            </span>
            <div className={`${headerStyles.linksContainer} hide-on-mobile`}>
              <Link to="/">
                <span className={`${headerStyles.posterum} textShadow3D`}>
                  {" "}
                  Posterum
                </span>
              </Link>
              <Link to="/html">HTML tags</Link>
            </div>
          </>
        )}
        <div className={headerStyles.buttonsContainer}>
          <button
            onClick={() => {
              setMode(nightMode ? "light" : "dark");
            }}
            className="button boxShadow3D"
          >
            {nightMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <button onClick={openMenu} className="button grow show-on-mobile">
            <KeyIcon size={16} color={nightMode ? "#eff31d" : "#d8a12a"} />
            <KeyholeIcon size={12} color={nightMode ? "#61dafb" : "#2763a8"} />
          </button>
        </div>
      </div>
      {!isCalendarPage && (
        <div className={headerStyles.borderSliderWrapper}>
          <div className={headerStyles.borderSlide} />
        </div>
      )}
    </header>
  );
};

export default Header;
