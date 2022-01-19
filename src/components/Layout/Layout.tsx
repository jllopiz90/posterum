import React, { useState } from "react";
import { Helmet } from "react-helmet";

import Header from "./Header/Header";
import MenuMobile from "../elements/RigthDrawer";
import OutsideAlerter from "../../functions/useOutsideElementEvent";
import useDarkMode from "../../functions/useDarkMode";

const Layout = ({ children }: { children: JSX.Element }) => {
  const { mode, setMode } = useDarkMode();
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const openMenu = () => setOpenMenuMobile(true);
  const closeMenu = () => setOpenMenuMobile(false);

  return (
    <>
      {/* @ts-ignore */}
      <Helmet>
        <title>Posterum</title>
      </Helmet>
      <Header
        openMenu={openMenu}
        setMode={setMode}
        nightMode={mode === "dark"}
        openMenuMobile={openMenuMobile}
      />
      <main>
        <OutsideAlerter onClick={closeMenu}>
          <MenuMobile
            nightMode={mode === "dark"}
            open={openMenuMobile}
            close={() => setOpenMenuMobile(false)}
          />
        </OutsideAlerter>
        {children}
      </main>
    </>
  );
};

export default Layout;
