import React, { useState } from "react";
import { Helmet } from "react-helmet";

import Header from "./Header/Header";
import MenuMobile from "../elements/RigthDrawer";
import OutsideAlerter from "../../functions/useOutsideElementEvent";

const Layout = ({ children }: { children: JSX.Element }) => {
  const [nightMode, setMode] = useState(true);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  
  const openMenu = () => setOpenMenuMobile(true);
  const closeMenu = () => setOpenMenuMobile(false);

  return (
    <>
      <Helmet>
        <title>Posterum</title>
      </Helmet>
      <Header openMenu={openMenu} setMode={setMode} nightMode={nightMode} openMenuMobile={openMenuMobile} />
      <main>
        <OutsideAlerter onClick={closeMenu}>
          <MenuMobile
            nightMode={nightMode}
            open={openMenuMobile}
            close={() => setOpenMenuMobile(false)}
          />
        </OutsideAlerter>
        {children}
      </main>
    </>
  );
}

export default Layout;
